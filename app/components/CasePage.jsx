
import Link from "next/link";


import React from 'react'

const CasePage = ({id, title, description, createdAt}) => {
  return (
    <div>
      <article className="space-y-4  p-4">
      
      <div className="w-full flex "> <Link href={`/editcase/${id}`} className=" bg-green-600 font-bold text-white py-3 px-6 w-fit self-end"> Edit Case </Link></div>
      
         <div className="capitalize">
             <div className="font-bold"> title: {title}</div>
             <div> <span className="font-bold"> Date:</span> {createdAt}</div>
             <div> <span className="font-bold"> case:</span> {id.slice(0,8)} </div>
         </div>

         <div>
             image
         </div>
         <div>
        {description}
         </div>
     </article>
    </div>
  )
}

export default CasePage