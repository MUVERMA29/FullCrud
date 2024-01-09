import React, { useState } from 'react'
import { NavLink,  useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate(" ");

    const [inpval,setInp] = useState({
        name:"",
        email: "",
        age: "",
        mobile:"",
        address:"", 
        work:"",
    })

    const setdata=(e) => {
        console.log(e.target.value)
        const {name,value} =e.target;

        setInp((preval) => {
        
            return{
                ...preval,
                [name]:value

            }
        })
    }

    const addinpdata = async (e) => {
      e.preventDefault();

      const { name, email, age,  mobile, address, work } = inpval;

      const res = await fetch("/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name, email, age,  mobile, address, work
          })
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 404 || !data) {
          console.log("error ");
          alert("error");

       }else{
        navigate("/");
        alert("data added");
        //console.log("data added");
       }
      
      
  }




  return (
    <div className='container'>
      <div className="row offset">
        <div className="col oofset">
        <NavLink to='/'>Home</NavLink>
        <form className='mt-5'>
        <div className="mb-3 col-lg-6 col-mg-6 col-12 ">
    <label for="inputname" className="form-label">Name</label>
    <input type="text" value={ inpval.name} onChange={setdata} className="form-control" id="inputname" name='name'/>
  </div>
  
  <div className="mb-3 col-lg-6 col-mg-6 col-12">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={inpval.email} onChange={setdata} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'/>
    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  <div className="mb-3 col-lg-6 col-mg-6 col-12">
    <label for="exampleInputAge" className="form-label">age</label>
    <input type="number" value={inpval.age} onChange={setdata} className="form-control" id="exampleInputAge" name='age'/>
  </div>

  <div className="mb-3 col-lg-6 col-mg-6 col-12">
    <label for="exampleInputMobile" className="form-label">Mobile</label>
    <input type="tel"  value={inpval.mobile} onChange={setdata} className="form-control" id="exampleInputMobile" name='mobile'/>
  </div>

  <div className="mb-3 col-lg-6 col-mg-6 col-12">
    <label for="exampleInputAddress" className="form-label">Address</label>
    <input type="text"  value={inpval.address} onChange={setdata} className="form-control" id="exampleInputAddress" name='address'/>
  </div>

  <div className="mb-3 col-lg-6 col-mg-6 col-12">
    <label for="exampleInputWork" className="form-label">work</label>
    <input type="text" value={inpval.work}  onChange={setdata} className="form-control" id="exampleInputWork" name='work'/>
  </div>
  
  <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
      
    </div>
  )
}
export  default Register;
                      