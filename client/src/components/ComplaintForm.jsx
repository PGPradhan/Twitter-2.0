import React, { useState } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import './ComplaintForm.css'
import FormPropsTextFields from './formMUI';
import Header from './Header';
import Sidebar from './Sidebar';
import emailjs from "@emailjs/browser";


export default function ComplaintForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [descrip, setDescript] = useState("");
  const [address, setAddress] = useState("");
  const [addinfo, setAddinfo] = useState("");
  const [ans,setAns] = useState("");
  
//   const create = async()=>{
  
//     const res = await fetch(`http://localhost:4000/createcase`,{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify({
//         name: name,
//         email: email,
//         phone: phone,  
//         type: type,
//         description: descrip,
//         address: address,
//         additonalInfo: addinfo,
//         status: "new",
//       })
//     })
//     const data = await res.json();
//     console.log(data);
//     if(res.status===422 || !data){
//       console.log("error");
//     }else{
//       // setUser(data);
//       console.log(user);
      
//       // navigate(`/l1carousal?id=${data._id}&${user._id} `);
//     }
// }
//  service_2y1kkdf 
//

const send = (event) => {
  event.preventDefault();
  let data ={"type_of": type  ,"from_name" : name, "email": email, "phone_no": phone,"acc_id" : id,"desc": descrip ,"comment": addinfo}
  emailjs.send("service_2y1kkdf","template_nm2ja96",data,"VoaxMiL_2JnxsaFAe")
  .then(res=> setAns("Email has being send to the admin"))
  .catch(err => setAns("issue" + err))
}

  return (<div>
    <Sidebar/>
    <div className='forpad'>
      
      <h1></h1>
        <h2></h2>
    <h1 className='padhead'>Enter Your Complaints</h1>
    <h2></h2>

    <form onSubmit={send}>
    <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Name' onChange={(e)=>{setName(e.target.value)}}  />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Email' onChange={(e)=>{setEmail(e.target.value)}}  />
        </MDBCol>
      </MDBRow>
   
    <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Phone no' onChange={(e)=>{setPhone(e.target.value)}}  />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Type' onChange={(e)=>{setType(e.target.value)}}  />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Account ID' onChange={(e)=>{setId(e.target.value)}}  />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Description' onChange={(e)=>{setDescript(e.target.value)}} />
      

      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Paste Comment' onChange={(e)=>{setAddinfo(e.target.value)}}  />

      
      <div className='btn'>
      <MDBBtn style={{backgroundColor:"#1DA1F2"}}
      type='submit' >
        Submit
      </MDBBtn>
      </div> 
    </form>
    <h1>{ans}</h1>
    <footer />
    </div>
    </div>
  );
}