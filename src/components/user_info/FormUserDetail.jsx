import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import axios from "axios";
const FormUserDetail = () => {
  const [user] = useAuthState(auth);
  const [imageURL, setImageURL] = useState(user?.photoURL);
  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);
  useEffect(() => {
    if (user?.photoURL) {
      setImageURL(user.photoURL);
    } else {
      // navigate("/");
    }
  }, [user]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    setImage(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageURL(reader.result);
    };
  };

  const handleButtonClickAPI = async (e) => {
    const formData = new FormData();
    formData.append("imageFile", image);
    console.log(formData);
    await axios
      .postForm("http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/p/upload-image", formData)
      .then((response) => {
        console.log("Upload Success");
        console.log(response);
      })
      .catch((err) => {
        console.log("Upload fail ", err);
      });
  };

  return (
    <div className="pt-6 w-[60%] mx-auto">
      <div className="col-span-2">
        <aside>
          <div className="flex">
            <div>
              <img className="rounded w-[120px] h-[120px]" src={imageURL} alt="error" />
            </div>
            <div className="mt-3 ml-3">
              <div className="flex flex-col">
                <button
                  onClick={handleButtonClick}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  Upload new avatar
                </button>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
                <span className="mt-3">Recommended size: 400x400px</span>
              </div>

            </div>
          </div>
        </aside>
      </div>
      <div className="col-span-4">
        <main>
          <div className="lg:col-span-3 flex justify-between items-center">
            <div className="text-[24px] font-semibold">My details</div>
            <Link to={"/profile"} className="text-[16px] font-normal text-gray-600">
              View my profile
            </Link>
          </div>
        </main>

        <form action="#" className="w-full mt-10">
          <div className="flex flex-wrap -mx-3 mb-6 mt-10">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                value={user?.displayName}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Headline
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                value={user?.displayName}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                About
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                value={user?.displayName}
              />
            </div>
          </div>
          <button className="text-slate-500 border border-slate-500 hover:text-blue-600 hover:border-blue-500 font-semibold py-2 px-[2rem] rounded">
            Save changes
          </button>
        </form>
      </div>

    </div>
  );
};

export default FormUserDetail;
