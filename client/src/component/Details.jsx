import React, { useEffect,useState } from "react";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import { NavLink, useParams,  useNavigate } from "react-router-dom";


const Details = () => {

  const [getUserdata,setUserdata] = useState([]);
    //console.log(getUserdata);
  const {id} = useParams("");

  //const navigate = useNavigate();




  const getdata = async () => {
    //e.preventDefault();

    
    const res = await fetch(`/getuser/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
       
    });

    const data = await res.json();
    //console.log(data);

    if (res.status === 404 || !data) {
        console.log("error ");
        

     }else{
      setUserdata(data);
      //navigate("/");
      //console.log(" get data ");
     }


    }
    useEffect(()=>{
      getdata();
    },[]);

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
    <div className="container mt-3">
      <h1>Welcome Muskan Verma</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
        <div className="add_btn">
              <NavLink to={`/edit/${getUserdata._id}`} ><button className="btn btn-primary mx-2"><i class="fa-solid fa-pen"></i></button></NavLink>
                <button className="btn btn-danger" onClick={()=>deleteuser(getUserdata._id)}><i class="fa-solid fa-trash"></i></button>
              </div>
          <div className="row">
            <div className="left_view col-log-6 col-md-6 col-12">
              <img src="/img/profile.png" style={{ width: 50 }} alt="profile" />
              <h5 className="mt-3">
                Name:<span>{getUserdata.name}</span>
              </h5>
              <h5 className="mt-3">
                Age:<span>{getUserdata.age}</span>
              </h5>
              <p className="mt-3">
                {" "}
                <EmailIcon />
                Email: <span>{getUserdata.email}</span>
              </p>
              <p className="mt-3">
                {" "}
                <WorkIcon />
                Occupation: <span>{getUserdata.work}</span>
              </p>
            </div>
            <div className="right_view col-log-6 col-md-6 col-12">
              
              <p className="mt-10">
                {" "}
                <AppShortcutIcon />
                mobile:<span>{getUserdata.mobile}</span>
              </p>
              <p className="mt-6">
                <EditLocationAltIcon />
                location: <span>{getUserdata.address}</span>
              </p>
              
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
