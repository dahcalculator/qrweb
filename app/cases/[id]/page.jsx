import Link from "next/link";





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
  return (
    <div>
   <>
   {x.map((c) =>(
     <article className="space-y-4  p-4">
      
      <div className="w-full flex "> <Link href={`/editcase/${c.id}`} className=" bg-green-600 font-bold text-white py-3 px-6 w-fit self-end"> Edit Case </Link></div>
      
         <div className="capitalize">
             <div className="font-bold"> title: {c.title}</div>
             <div> <span className="font-bold"> Date:</span> {c.reatedAt}</div>
             <div> <span className="font-bold"> case:</span> {c.id.slice(0,8)} </div>
         </div>

         <div>
        {description}
         </div>
     </article>
     ))}
     </>
 </div>

  )
}

export default page