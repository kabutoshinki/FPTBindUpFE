import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import * as userService from "../../services/userService";
import logo from "../../assets/logo.png";
import axios from "axios";
import { toast } from "react-toastify";

const FormUserDetail = ({ user, onSuccess }) => {
  const [imageURL, setImageURL] = useState();
  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    gender: "",
    headline: "",
    description: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        id: user?.id || "",
        name: user?.name || "",
        gender: user?.gender || 0,
        headline: user?.headline || "",
        description: user?.description || "",
        address: user?.address || "",
        phone: user?.phone || "0123456789",
      });
      setImageURL(user?.avatar);
    }
  }, [user]);

  console.log(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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
    try {
      const userId = localStorage.getItem("user").replace(/"/g, "");
      const formData = new FormData();
      formData.append("imageFile", image);
      console.log(formData);
      await userService.userImage(userId, formData);
      toast.success("Upload Success");
    } catch (error) {
      toast.error("Upload Fail");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.updateUserById(formData);
      toast.success("Update success");
    } catch (error) {
      toast.error("Update fail");
    }
  };

  return (
    <div className="pt-6 w-[60%] mx-auto">
      <div className="col-span-2">
        <aside>
          <div className="flex">
            <div>
              <img className="rounded w-[100px] h-[100px]" src={imageURL || user?.avatar || logo} alt="error" />
              <button
                onClick={handleButtonClickAPI}
                className="text-slate-500 mt-3 mb-3 border border-slate-500 hover:text-blue-600 hover:border-blue-500 font-semibold py-2 px-[2rem] rounded"
              >
                Save
              </button>
            </div>
            <div className="mt-2 ml-3">
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

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-wrap -mx-3 mb-2 mt-2">
            <div className="w-full px-2">
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
                name="name"
                value={formData?.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2 mt-3">
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
                name="headline"
                value={formData?.headline}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2 mt-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Description
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                name="description"
                value={formData?.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2 mt-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                name="address"
                value={formData?.address}
                onChange={handleChange}
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
