"use client"

import { useSession, signOut } from "next-auth/react";

const page = () => {
  
  const { data } = useSession();
  return (
    <div>
      welcome {data?.user?.name}
    </div>
  )
}

export default page