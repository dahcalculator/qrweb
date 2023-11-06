import Link from "next/link";
import React from "react";

import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  return (
    <nav className=" flex-row w-full h-20 justify-center items-center">
    <div className=" flex justify-between  px-10 items-center">
        <div className=" font-bold">
        School Cadet Unit
        </div>


        <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row">
          {data?.user ? (
            <>
              <span style={{ marginRight: "15px" }}>
                Hi, {data?.user?.name}
              </span>

              <span style={{ cursor: "pointer" }} onClick={() => signOut()}>
                {" "}
                Logout
              </span>
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
