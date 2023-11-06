
import Link from "next/link"
import Image from "next/image"

const getCases = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/cases", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading cases: ", error);
  }
};


const CaseCard = async () => {
  const { cases } = await getCases();
 return (
    <div className="w-full h-full">
        <div className="  flex-col flex gap-4 w-full h-full">
          <>
         {
           cases.map((c)=>(
            
        <div className="  rounded-md flex-row flex gap-20 justify-evenly capitalize w-full h-32 bg-white "  key={c.id}>
        
            <div className="h-full flex w-full flex-row items-center  justify-evenly p-4 "
           
            >
            <div className="text-xs  h-full w-full" > 
            <Image
            src="/logo.jpg"
            width={90}
            height={100}
            alt="case image"
            />

             </div>
            <div className="h-full w-full ">
            <div className="text-2xs  " > name : {c.title}</div>
            <div className="text-xs text-gray-400 font-bold"> case no: {(c._id).slice(0, 8)}</div>
            <div className="text-xs text-gray-400 font-bold"> date: {c.createdAt}</div>
            </div>
            <div className="text-sm font-bold bg-white h-full w-full flex items-end  justify-end " > <Link className="hover:bg-blue-400 hover:text-white w-36 h-12 flex justify-center items-center rounded " href={`/cases/${c._id}`}> View</Link> </div>
            </div> 
           

        </div>   
         ))}
         </>
    </div>
    </div>
  )
}

export default CaseCard