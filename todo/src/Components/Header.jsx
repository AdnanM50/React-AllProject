
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Firebase/fierbase";
import Swal from "sweetalert2";


import { useState } from 'react';
import Modalcompo from "./Modalcompo";
import Signup from "./signup";
const Header = () => {


    const [user, setUser] = useState(null);

  //console.log("🚀 ~ file: App.jsx:14 ~ App ~ user:", user)

  
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);
  auth.languageCode = "en";

  const signInWithGoogle = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result?.user);
        const Name = result?.user?.displayName;
        const Email = result?.user?.email;
        const Photo = result?.user?.photoURL;
        localStorage.setItem("Name", Name);
        localStorage.setItem("Email", Email);
        localStorage.setItem("Profilepic", Photo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        Swal.fire("Success!", "You have successfully logged out!", "success");
     
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
          <div className="flex justify-between w-full items-center bg-black">
      <h1 className=" bg-black text-white text-center font-sans lg:text-6xl sm:text-2xl p-7 lg:p-10 font-extrabold">
          My toDo app
        </h1>
        {auth.currentUser ? (
          <>
          <button
            onClick={handleSignOut}
            className="block py-2 px-3 border bg-red-700 text-white rounded mx-auto"
          >
            Sign Out
          </button>
           <div>
      
           <img
             src={auth.currentUser?.photoURL}
             alt=""
             className="h-[50px] w-[50px] mx-auto m-3 rounded-full"
           
           />
          
         </div>
         </>
        ) : (
          <>
            <button
              onClick={signInWithGoogle}
              className="block py-2 px-3 border bg-gray-700 text-white rounded"
            >
              Sign in With Google
            </button>
          </>
        )}
        {/* {auth.currentUser && (
             
              <div>
      
                <img
                  src={auth.currentUser?.photoURL}
                  alt=""
                  className="h-[50px] w-[50px] mx-auto m-3 rounded-full"
                
                />
               
              </div>
        ) } */}
      
        {/* <Link to='/Register' className="text-black bg-white px-7 py-4   focus:outline-none hover:bg-indigo-600 rounded text-sm">
          Register
        </Link> */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div className="flex">
        <Modalcompo/>
        <Signup/>
        </div>

   
      </div>
    </div>
  )
}

export default Header
