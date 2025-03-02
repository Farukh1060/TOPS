import { current } from "@reduxjs/toolkit";
import { useRef } from "react";
import {useDispatch, useSelector} from "react-redux"
import { submit_data } from "../feature/crud/crudSlice";

const Regestration = () => {


 const dispatch = useDispatch()


 const name = useRef()
 const email = useRef()
 const number = useRef()
 
 
 
 const submithandler = (e)=>{
   e.preventDefault()
   const user_data = {
    name:name.current.value,
    email:email.current.value,
    number: number.current.value
   }
dispatch(submit_data(user_data))
}
  
  return (
    <div className="row">
      <div className="col-6 mx-auto card p-3 m-3">
        <form onSubmit={submithandler}>
          <div className="mb-3 ">
            <label htmlFor="exampleInputname" className="form-label">
              Full Name
            </label>
            <input
              ref={name}
              type="text"
              className="form-control"
              id="exampleInputname"
              aria-describedby="nameHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
            ref={email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3 ">
            <label htmlFor="exampleInputnumber" className="form-label">
              Number
            </label>
            <input
            ref={number}
              type="text"
              className="form-control"
              id="exampleInputnumber"
              aria-describedby="numberHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Regestration;
