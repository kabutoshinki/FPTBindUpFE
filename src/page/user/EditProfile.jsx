import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import FormUserDetail from "../../components/user_info/FormUserDetail";
import * as userService from "../../services/userService";
const EditProfile = () => {
  const [userData, setUserData] = useState();
  const UserProfile = async () => {
    const userId = localStorage.getItem("user").replace(/"/g, "");
    const { data } = await userService.findUserById(userId);

    setUserData(data?.data);
  };

  const handleSuccess = () => {
    UserProfile();
  };

  useEffect(() => {
    UserProfile();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="body-font">
        <Navbar borderNavBar={true} />
      </header>
      <div className="pt-20 flex-grow mx-auto w-[75%]">
        <FormUserDetail user={userData} onSuccess={handleSuccess} />
      </div>
    </div>
  );
};

export default EditProfile;
