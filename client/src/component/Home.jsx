import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
//import { deleteuser } from "../../../server/controller/userController";


const Home = () => {

  const [getUserdata,setUserdata] = useState([]);
  console.log(getUserdata);
   
  const getdata = async (e) => {
    //e.preventDefault();

    
    const res = await fetch("/getdata", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
       
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
        console.log("error ");
        

     }else{
      setUserdata(data);
      console.log(" get data ");
     }


    }
    useEffect(()=>{
      getdata();
    },[])

    //delete user
    const deleteuser = async (id) => {

      const res2 = await fetch(`/deleteuser/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const deletedata = await res2.json();
      console.log(deletedata);

      if (res2.status === 422 || !deletedata) {
          console.log("error");
      } else {
          console.log("user deleted");
          
          //setDLTdata(deletedata)
          getdata();
      }

  }



  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-5 mb-2">
          <NavLink to="/register" className="btn btn-primary">Add Data</NavLink>
        </div>

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Jobs</th>
              <th scope="col">Numbers</th>
              <td scope="col"></td>
            </tr>
          </thead>
          <tbody>

            {
              getUserdata.map((element,id)=>{
                return(
                  <>
                  <tr>
              <th scope="row">{id + 1 }</th>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.work}</td>
              <td>{element.mobile}</td>
              <td className="d-flex justify-content-between">
               <NavLink to={`view/${element._id}`}><button className="btn btn-success"><i class="fa-solid fa-eye"></i></button></NavLink>
                <NavLink to={`edit/${element._id}`}><button className="btn btn-primary"><i class="fa-solid fa-pen"></i></button></NavLink>
                <button className="btn btn-danger" onClick={()=>deleteuser(element._id)}><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
                  </>
                )
              })
            }
            
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
