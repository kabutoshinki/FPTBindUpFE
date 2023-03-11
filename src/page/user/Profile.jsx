import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import UserHeading from "../../components/user_info/UserHeading";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="body-font">
        <Navbar borderNavBar={true} />
      </header>
      <div className="pt-20 flex-grow mx-auto w-full">
        <div className="absolute bg-gradient-to-b from-blue-100 w-full h-[40pt]"></div>
        <UserHeading />
      </div>
    </div>
  );
};

export default Profile;
