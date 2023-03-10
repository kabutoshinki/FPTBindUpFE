import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import FormUserDetail from "../../components/user_info/FormUserDetail";

const EditProfile = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="body-font">
        <Navbar borderNavBar={true}/>
      </header>
      <div className="pt-20 flex-grow mx-auto w-[75%]">
        <FormUserDetail />
      </div>
    </div>
  );
};

export default EditProfile;
