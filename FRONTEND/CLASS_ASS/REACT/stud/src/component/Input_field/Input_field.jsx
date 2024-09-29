import { useState } from "react";

const Input_field = ({ resiveformdata }) => {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [number, setnumber] = useState("");

  const inputnamehandler = (e) => {
    setname(e.target.value);
  };
  const inputemailhandler = (e) => {
    setemail(e.target.value);
  };
  const inputnumberhandler = (e) => {
    setnumber(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
  };

  const formdata = () => {
    let studdata = {
      name,
      email,
      number
    };
    // console.log(studdata)
    resiveformdata(studdata);
    setname("")
    setemail("")
    setnumber("")
  };

  return (<div>
    <div className="row">
      <div className="col-12">
        <form action="" onSubmit={submit}>
          <div className="row">
            <div className="col-3">
              <input
                type="text"
                placeholder="enter student name"
                onChange={inputnamehandler}
                value={name}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                placeholder="enter email id"
                onChange={inputemailhandler}
                value={email}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                placeholder="enter number"
                onChange={inputnumberhandler}
                value={number}
              />
            </div>
            <div className="col-3">
              <button onClick={formdata}>enter</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    
  );
};

export default Input_field;
