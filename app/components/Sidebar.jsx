import {RxDashboard, RxFile, RxPlus, RxTable} from "react-icons/rx"
import {TbFileReport} from "react-icons/tb"
import Link from "next/link"
const Sidebar = () => {
  return (
    <div className="shadow-md bg-white  mx-4 fixed">
          <ul className=" flex-col  justify-evenly  flex gap-4 text-xs capitalize py-2 ">
            
               
            <Link className="w-full   font-bold" href="/dashboard">
            <li   className=" h-6 gap-2 hover:bg-blue-200 hover:font-bold px-2 items-center flex rounded-md">
             <i><RxDashboard/></i>
             dashboard
             </li>
            </Link>
            <Link className="w-full   font-bold" href="/cases">
            <li   className=" h-6 gap-2 hover:bg-blue-200 hover:font-bold px-2 items-center flex rounded-md">
             <i><RxFile/></i>
             Case
             </li>
            </Link>
            <Link className="w-full   font-bold" href="/addcase">
            <li   className=" h-6 gap-2 hover:bg-blue-200 hover:font-bold px-2 items-center flex rounded-md">
             <i><RxPlus/></i>
             add case
             </li>
            </Link>
            <Link className="w-full   font-bold" href="/evidence">
            <li   className=" h-6 gap-2 hover:bg-blue-200 hover:font-bold px-2 items-center flex rounded-md">
             <i><RxTable/></i>
             evidence
             </li>
            </Link>
            <Link className="w-full   font-bold" href="/report">
            <li   className=" h-6 gap-2 hover:bg-blue-200 hover:font-bold px-2 items-center flex rounded-md">
             <i><RxFile/></i>
             report
             </li>
            </Link>
            
           
     </ul>
    </div>
  )
}

export default Sidebar