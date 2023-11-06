"use client"

import Link from 'next/link'
import {RxDashboard, RxFile, RxPlus, RxTable} from "react-icons/rx"
import {TbFileReport} from "react-icons/tb"
import Header from "../Header";
import Mini from "../components/Mini";
import Footer from "../components/Footer";
Footer

import { useSession, signOut } from "next-auth/react";
import Card from '../components/Card';
import CardS from '../components/CardS';
import CardT from '../components/CardT';



const Dashboard = () => {

  const { data } = useSession();
  return  (
  
  <div>

<div className="w-screen h-full">


          <div className="flex w-full h-full  ">

          <div className="w-1/12  shadow-md bg-white ">

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
                
                <li   className=" h-6 gap-2 hover:bg-blue-200 hover:font-bold px-2 items-center flex rounded-md" onClick={() => signOut()}>
                 <i
                 ><TbFileReport/></i>
                 Logout
                 </li>
         </ul>
          </div>

          <div className="w-8/12 p-2">
          <Card/>
          <CardS/>
          <CardT/>

          </div>

          <div className="w-3/12 bg-white py-4">

          <Mini data={data} />
          </div>

          </div>



          <div>
          <Footer/>
          </div> 
        </div>  
  </div>

  )
};

export default Dashboard;
