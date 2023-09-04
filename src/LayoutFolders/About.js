import React, { useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import { FaRegEye } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GiAlliedStar } from 'react-icons/gi';
import { useLocation } from 'react-router-dom';
import './About.css'
import birdfly from './birdfly.gif'
import Newform from './Newform';
function About() {
  const New_button=useRef(0)
  const navigate = useNavigate();
  const [lgShow, setLgShow] = useState(false);
  const[getdata,setgetdata]=useState([])
  const[editdata,seteditdata]=useState([])
  useEffect(() => {
axios.get ('http://localhost:4000/employe/list').then((res)=>{
  setgetdata(res.data)
})
  }, []);
 
  const Editfunction =(data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15)=>{
    navigate('/contacts/home',{state:{params1:data1,params2:data2,params3:data3
      ,params4:data4,params5:data5,params6:data6,params7:data7,params8:data8,params9:data9,
      params10:data10,params11:data11,params12:data12,params13:data13,params14:data14,params15:data15
    }})
  }
  const [viewdata,setviewdata]=useState([])
  const ViewFuntion=(id)=>{
   setLgShow(true)
      axios.get(`http://localhost:4000/view/employee/${id}`).then(res=>{
      setviewdata(res.data)
      console.log(res.data)
     })
  }
  const Newformfuntion=()=>{
 navigate('/contacts/home')
  }
  const DeleteFunction=(id)=>{
    console.log(id)
    axios.post(`http://localhost:4000/create/new/employee/delete/form/data/${id}`).then(res=>{
   console.log(res.data)
    window.location.reload()
   
   }) 
  }
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
        <div>
        { isLoading ? <div><Newform/></div>
        :  <div>
                <div>
     
        
          <div className='Add_new_button'>
            <button className='add_button'  onClick={Newformfuntion} ref={New_button}> AddNew</button>
           </div>
        
    
       
        <table  className='tableParent' striped bordered hover>
        <thead >
          
          <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}><span className='action'>dddddd</span>action<span className='action'>dddddd</span></th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>Sl.no</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>Name</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>FatherName</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>GuardianName</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>Email</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>PhoneNumber</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>AlterPhoneNo</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>Address</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>DateofBirth</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>Age</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>Gender</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>Skill1</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>Skill2</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>Skill3</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>Department</th>
            <th style={{border:'1px solid black',backgroundColor:"AntiqueWhite",color:"red",padding:"10px",fontSize:"20px"}}>Designation</th>
         
        </thead>
        <tbody >
        {
              getdata.map((data,index)=>(  
          <tr  style={{border:"1px solid black" ,borderCollapse:"collapse"}}>
          <td  ><button className='Edit'onClick={()=>{Editfunction(data.stutbl_name,data.stutbl_fname,
            data.stutbl_gname,data.stutbl_email,data.stutbl_mobile_no,data.stutbl_alt_mobile,data.stutbl_address,
            data.stutbl_dob,data.stutbl_age,data.stutbl_gender,data.stutbl_skills1,data.stutbl_skills2,data.stutbl_skills3,
            data.stutbl_dept,data.stutbl_desin
              )}}><FaRegEdit size={20}/></button><button className='Delete' onClick={handleShow}><AiFillDelete  size={20}/></button> <button className='view'  onClick={()=>{ViewFuntion(data.stutbl_id)}} ><FaRegEye  size={20}/></button></td> 
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{index+1}</td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_name} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_fname} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_gname} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_email} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_mobile_no} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_alt_mobile} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_address} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_dob} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_age} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_gender} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_skills1} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_skills2} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_skills3} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_dept} </td>
            <td style={{border:'1px solid black',fontSize:"14px",fontFamily:"sans-serif"}}>{data.stutbl_desin} </td>
            <Modal show={show} onHide={handleClose} className='about_delete_model_page'>
        <Modal.Header closeButton className='about_delete_model_page_header'>
          <Modal.Title  style={{textTransform:"capitalize",fontSize:"16px"}}>are you sure you want to delete this detail </Modal.Title>
        </Modal.Header>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{DeleteFunction(data.stutbl_id)}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
          </tr>
          ))
        }
        </tbody>
      </table>
      
    
    <>
        <Modal
        style={{marginLeft:"120px"}}
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className='_view_header'>
          {viewdata.map((view)=>(
          <Modal.Title id="example-modal-sizes-title-lg"  style={{color:"Cyan",textTransform:"uppercase"}}>
            {view.stutbl_name}
          </Modal.Title>
          ))}
          <span className='icon_animi'><img src={birdfly} width={40}></img></span>
        </Modal.Header>
        <Container className='_view_model'>
      <Row>
        <Col>
           <Row>
            <Col style={{color:"Cyan"}}>
             <div>FatherName:</div>
             <div>GuardianName:</div>
             <div>Email:</div>
             <div>PhoneNumber:</div>
             <div>Alt PhoneNo:</div>
             <div>Address:</div>
             <div>DOB:</div>
            </Col>
            <Col style={{color:"white",textTransform:"capitalize"}}>
            {viewdata.map((val)=>(
              <>
               <div>{val.stutbl_fname}</div>
               <div>{val.stutbl_gname}</div>
               <div>{val.stutbl_email}</div>
               <div>{val.stutbl_mobile_no}</div>
               <div>{val.stutbl_alt_mobile}</div>
               <div>{val.stutbl_address}</div>
               <div>{val.stutbl_dob}</div>
              </>   
            ))}
            </Col>
           </Row>
        </Col>
        <Col>
           <Row>
            <Col  style={{color:"Cyan"}}>
            <div>Age:</div>
             <div>Gender:</div>
             <div>Skill-1:</div>
             <div> Skill-2:</div>
             <div>Skill-3:</div>
             <div>Department:</div>
             <div>Designation:</div>
            </Col>
            <Col  style={{color:"white",textTransform:"capitalize"}}>
            {viewdata.map((val)=>(
          <>
           <div>{val.stutbl_age}</div>
           <div>{val.stutbl_gender}</div>
           <div>{val.stutbl_skills1?val.stutbl_skills1 :'null'}</div>
           <div>{val.stutbl_skills2?val.stutbl_skills2:'null'}</div>
           <div>{val.stutbl_skills3?val.stutbl_skills3:'null'}</div>
           <div>{val.stutbl_dept}</div>
           <div>{val.stutbl_desin}</div>
          </>   
        ))}
            </Col>
           </Row>
        </Col>
      </Row>
    </Container>
      </Modal>
        </>
    </div>
          </div>}
         
        </div>
  )
}

export default About