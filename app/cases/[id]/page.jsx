import Link from "next/link";
import RemoveBtn from "../../components/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";



const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/cases/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch case");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const page = async ({ params }) => {
  const { id } = params;
  const { x } = await getTopicById(id);
  const { _id, description, title, createdAt } = x;
  return (
    <div>
   
     <article className="space-y-4  p-4">
      
      <div className="w-full flex gap-2"> 
      <RemoveBtn id={_id} />
      <Link href={`/editcase/${id}`} className="text-2xl"> <HiPencilAlt/></Link></div>
      
         <div className="capitalize">
             <div className="font-bold"> title: {title}</div>
             <div> <span className="font-bold"> Date:</span> {createdAt}</div>
             <div> <span className="font-bold"> case:</span> {id.slice(0,8)} </div>
         </div>

         <div>
        {description}
         </div>
     </article>
  
 </div>

  )
}

export default page