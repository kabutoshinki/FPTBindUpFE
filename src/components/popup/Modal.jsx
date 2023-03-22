import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../../assets/logo.png";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import * as authenService from "../../services/authenService";

const Modal = ({ open, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const googleProvider = new GoogleAuthProvider();
  const [user] = useAuthState(auth);
  const [credential, setCredential] = useState({ username: undefined, password: undefined });
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await authenService.googleLogin(result.user.accessToken);
      // window.localStorage.setItem("authenticate", "true");
      onClose();
      dispatch({ type: "LOGIN_START" });
      const user = await authenService.getCurrentUser();
      dispatch({ type: "LOGIN_SUCCESS", payload: user.jti });
      toast.success("Login Success.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate("/");
      window.location.reload();
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      toast.error("Login Fail", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  useEffect(() => {
    if (user) {
      // console.log(user);
      onClose();
    } else {
      // console.log("login");
    }
  }, [user]);
  if (!open) return null;

  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOnClose}
    >
      <div className="md:w-[600px] w-[600px] mx-auto flex flex-col">
        <div className="bg-white p-8 rounded-sm flex flex-col">
          <img src={logo} className="h-fit w-14 mx-auto mt-2" alt="logo" />
          <h1 className="font-bold text-center mt-2 mb-3 text-xl md:text-2xl">Sign up on BindUP</h1>
          <p className="text-gray-600 text-center text-base md:text-lg">
            Join our community of friendly folks discovering and sharing the latest ideas.
          </p>
          <div className="flex justify-center items-center">
            <Link
              to={"#"}
              className="bg-white flex justify-center items-center border-solid border-2 rounded-lg py-3 mt-3 w-60 md:w-70 hover:bg-gray-200"
            >
              <FcGoogle className="ml-4" />
              <div className="ml-4">
                <p className="font-bold text-sm md:text-base text-grey-darker" onClick={GoogleLogin}>
                  Sign in with Google
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
