import Link from "next/link";
import React from "react";
import Image from "next/image"
import cadet from "../public/images/cadet.jpg"


import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  return (
    <nav className=" flex-row w-full h-fit justify-center items-center">
    <div className=" flex justify-between  px-10 my-4 items-center">
        <div className=" font-bold flex-col justify-center items-center">
       
        <Image
            src={cadet}
          width={70}
            height={70}
            alt="case image"
            />
             School Cadet Unit
        </div>


        <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row">
          {data?.user ? (
            <>
              <span style={{ marginRight: "15px" }}>
                Hi, {data?.user?.name}
              </span>

              <Link className="nav-link" href="/login">
              <span style={{ cursor: "pointer" }} onClick={() => signOut()}>
                {" "}
                Logout
              </span>
              </Link>
            </>
          ) : (
            <span style={{ marginRight: "15px" }}>
              {" "}
              <Link className="nav-link" href="/login">
                Login
              </Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
