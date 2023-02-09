import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Modal = ({ open, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!open) return null;

  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
      onClick={handleOnClose}
    >
      <div className="md:w-[600px] w-[600px] mx-auto flex flex-col">
        <div className="bg-white p-8 rounded-sm flex flex-col">
          <img
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            className="h-14 w-14 mx-auto mt-2"
            alt="logo"
          />
          <h1 className="font-bold text-center mt-2 mb-3 text-xl md:text-2xl">Sign up on Product Hunt</h1>
          <p className="text-gray-600 text-center text-base md:text-lg">
            Join our community of friendly folks discovering and sharing the latest products in tech.
          </p>
          <div className="flex justify-center items-center">
            <Link
              to={"#"}
              className="bg-white flex justify-center items-center border-solid border-2 rounded-lg py-3 mt-3 w-60 md:w-70 hover:bg-gray-200"
            >
              <FcGoogle className="ml-4" />
              <div className="ml-4">
                <p className="font-bold text-sm md:text-base text-grey-darker">Sign in with Google</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
