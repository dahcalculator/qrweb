"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const page = () => {
    const { data: session } = useSession();

  return (
    
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        user profile information
      <div className="w-28 h-32 bg-slate-500 rounded-full  text-left items-center flex justify-center
                      ">
                        B L
                  </div>
              
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        
      </div>
    </div>
  )
}

export default page