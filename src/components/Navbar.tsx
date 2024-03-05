import { signInWithPopup } from "firebase/auth";
import googleIcon from "../assets/google_logo.png";
import lensIcon from "../assets/lens_icon.png";
import accountIcon from "../assets/account_icon.png";
import { auth, googleProvider } from "../firebase/firebase_setup";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type setSearch = {
  setSearch: any;
};
const Navbar = (props: setSearch) => {
  const [profile, setProfile] = useState(false);

  const navigate = useNavigate();

  const googleSignin = async () => {
    try {
      signInWithPopup(auth, googleProvider);
      auth?.currentUser?.email && toast.success("Logged in successfully");
      setTimeout(() => {
        auth?.currentUser?.email && navigate("/");
      }, 2000);
    } catch (e) {
      console.log(e);
      const error: any = e;
      toast.error(error);
    }
  };

  // useEffect(()=>{
  //     setProfile(false);
  // },[auth.currentUser])

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="flex item-center pt-5 w-screen bg-white">
        <div className="flex items-center ml-5">
          <img src={googleIcon} className="h-10 w-25" />
          <h1 className="text-gray-500 text-2xl font-medium ml-3">News</h1>
        </div>
        <div className="ml-32 bg-zinc-100 flex items-center p-3 w-6/12 rounded-lg ">
          <img src={lensIcon} className="h-5 w-5" />
          <input
            onChange={(e) => props.setSearch(e.target.value)}
            type="text"
            placeholder="Search for news"
            className="ml-4 bg-zinc-100 w-6/12 outline-none"
          />
        </div>
        {auth?.currentUser ? (
          <img
            onClick={() => setProfile(!profile)}
            src={
              auth.currentUser?.photoURL
                ? auth.currentUser.photoURL
                : accountIcon
            }
            className="h-10 w-10 rounded-full ml-60 curser-pointer"
          />
        ) : (
          <button
            onClick={googleSignin}
            className="bg-blue-600 text-white p-2 w-28 ml-44 rounded-lg"
          >
            Sign in
          </button>
        )}
        {profile && <Profile setProfile={setProfile} />}
      </div>
    </>
  );
};

export default Navbar;
