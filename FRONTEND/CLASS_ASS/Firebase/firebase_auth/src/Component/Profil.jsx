import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase_auth";
import { doc, getDoc } from "firebase/firestore";

const Profil = () => {
  const [user, setuser] = useState();

  const fetchuserdata = async () => {
    auth.onAuthStateChanged(async (user) => {
      // console.log(user.uid);
      // 
      if (user == null) {
        console.log("loding")
        window.location.href = "/";
      }
      const snap = await getDoc(doc(db, "user", user.uid));

 
      if (snap.exists()) {
        setuser({
          name: snap.data().name,
          email: snap.data().email,
          number: snap.data().number,
        });
      } 
    });
  };
  console.log(user);

 


  const logouthandler = async () => {
   await auth.signOut();
    window.location.href = "/";
  };

  useEffect(() => {
    fetchuserdata();
  }, []);

  return (
   <>
      { user ? <div className="text-center">
      <div>welcome,{user.name}</div>
      <div>name: {user.name}</div>
      <div>number: {user.number}</div>
      <div>email: {user.email}</div>
      <div>
        <button className="btn btn-success" onClick={logouthandler}>
          logout
        </button>
      </div>
    </div>:"loding..."}
    
    </>
  
  );
};

export default Profil;
