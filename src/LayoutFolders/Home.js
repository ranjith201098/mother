import React, { useState } from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { useRef } from 'react';
import { useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Newform from './Newform';
function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const _data = location.state;
  if(_data){
  var editdata1 = _data.params1;
  var editdata2 = _data.params2;
  var editdata3 = _data.params3;
  var editdata4 = _data.params4;
  var editdata5 = _data.params5;
  var editdata6 = _data.params6;
  var editdata7 = _data.params7;
  var editdata8 = _data.params8;
  var editdata9 = _data.params9;
  var editdata10 = _data.params10;
  var editdata11 = _data.params11;
  var editdata12 = _data.params12;
  var editdata13 = _data.params13;
  var editdata14 = _data.params14;
  var editdata15 = _data.params15;
  
  }
  const [edit,setedit]=useState('')
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
 
  const handleClose = () =>{ 
    setShow(false)
   image_ref.current.value=''
  };
  const [startDate, setStartDate] = useState('');
  //.........updating atate
  const [artists, setArtists] = useState([]);
  const Fullname_ref=useRef(0)
  const Fathername_ref=useRef(0)
  const Guardianname_ref=useRef(0)
  const Emailaddres_ref=useRef(0)
  const Phoneno_ref=useRef(0)
  const altPhoneno_ref=useRef(0)
  const address_ref=useRef(0)
  const dob_ref=useRef(0)
  const age_ref=useRef(0)
  const gender_ref=useRef(0)
  const department_ref=useRef(0)
  const desighnation_ref=useRef(0)
  const education_ref=useRef(0)
  const institute_ref=useRef(0)
  const date_ref=useRef(0)
  const image_ref=useRef(0)
  const file_ref=useRef(0)
  const check_ref1=useRef(0)
  const check_ref2=useRef(0)
  const check_ref3=useRef(0)
 //......ref element
   const[error_show1,seterror_show1]=useState(false)
   const[error_show2,seterror_show2]=useState(false)
   const[error_show3,seterror_show3]=useState(false)
   const[error_show4,seterror_show4]=useState(false)
   const[error_show5,seterror_show5]=useState(false)
   const[error_show6,seterror_show6]=useState(false)
   const[error_show7,seterror_show7]=useState(false)
   const[error_show8,seterror_show8]=useState(false)
   const[error_show9,seterror_show9]=useState(false)
   const[error_show10,seterror_show10]=useState(false)
   const[error_show11,seterror_show11]=useState(false)
   const[error_show12,seterror_show12]=useState(false)
   const[error_show13,seterror_show13]=useState(false)
   const[error_show14,seterror_show14]=useState(false)
   const[error_show14_file,seterror_show14_file]=useState(false)
   const[error_show15,seterror_show15]=useState(false)
 //........error second
 const[errorage,seterrorage]=useState(false)
   const[edit1,setedit1]=useState('')
   const[Fullname,setFullname]=useState(editdata1)
   const[Fathername,setFathername]=useState(editdata2)
   const[Guardianname,setGuardianname]=useState(editdata3)
   const[Email,setEmail]=useState(editdata4)
   const[Phoneno,setPhoneno]=useState(editdata5)
   const[altPhoneno,setaltPhoneno]=useState(editdata6)
   const[address,setaddress]=useState(editdata7)
   const[dob,setdob]=useState(editdata8)
   const[gender,setgender]=useState('')
   const[Department,setDepartment]=useState(editdata14)
   const[Desighnation,setDesighnation]=useState(editdata15)
   const[Education,setEducation]=useState('')
   const[Institute,setInstitute]=useState('')
   const[age,setage]=useState('')
   const[age1,setage1]=useState(editdata9)
   const[_pure_files,set_pure_files]=useState('')
   //......error msg
   const[_gender_err_msg,set_gender_err_msg]=useState('')
   const[_skill_err_msg,set_skill_err_msg]=useState('')
//.....checkout
const[chechbox1,setcheckbox1]=useState(true)
const[chechbox2,setcheckbox2]=useState(true)
 const[chechbox3,setcheckbox3]=useState(true)
 //...checkbox set value
 const[chechbox_value1,setcheckbox1_value1]=useState('')
 const[chechbox_value2,setcheckbox1_value2]=useState('')
 const[chechbox_value3,setcheckbox1_value3]=useState('')
//.........Edit edu data
const[_edit_edu_name,set_edit_edu_name]=useState('')
const[_edit_edu_ename,set_edit_edu_ename]=useState('')
const[_edit_edu_year,set_edit_edu_year]=useState('')
const[_edit_edu_id,set_edit_edu_id]=useState('')
const[_edit_edu_ind,set_edit_edu_ind]=useState('')
//......condtion state
const[update,setupdate]=useState(false)
const [file, setFile] = useState('');
const [_file, set_File] = useState('');
//.........drop down dat
const [drOpdownData, setdrOpdownData] = useState([]);
//........edit function
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(true)
  }, 1000);
  return () => clearTimeout(timer);
}, []);
function Image_priview(e) {
  console.log(e.target.files[0]);
  setFile(e.target.files[0]);
  set_File(URL.createObjectURL(e.target.files[0]));

}
const Set_image_file=()=>{
  setShow(false)
}
    const checkbox_one=(data)=>{
      if(data=='react')
      {
        if(chechbox1==true){
          console.log(data,'first')
      setcheckbox1_value1(data,'first')
        }
        setcheckbox1(!chechbox1)
      }
      if(data=='jquery')
      {
        if(chechbox2==true){
          console.log(data,'first')
          setcheckbox1_value2(data,'first')
        }
        setcheckbox2(!chechbox2)
      }
      if(data=='flutter')
      {
        if(chechbox3==true){
          console.log(data,'first')
          setcheckbox1_value3(data,'first')
        }
        setcheckbox3(!chechbox3)
      }
   }
   
//.....Update_edu_data
const Update_edu_data=()=>{   
 const user = artists[_edit_edu_ind] ={
  name:Education,
  year:startDate,
  ename:Institute
}
setupdate(false)
education_ref.current.value=''
date_ref.current.value=''
institute_ref.current.value=''
}
const Updating_array_state =()=>{
  if(education_ref.current.value && institute_ref.current.value &&date_ref.current.value !==0){
    setArtists([ ...artists, {name: Education,year:startDate ,ename:Institute}]) 
  }
  education_ref.current.value=''
  date_ref.current.value=''
  institute_ref.current.value=''
}
const Delete_array_object=(index)=>{
console.log(index)
let numArray = artists.slice(0,index).concat(artists.slice(index+1))
  setArtists(
  numArray
  ) 
}
  const Edit_edu_data=(data1,data2,data3,dataid,ind)=>{
    set_edit_edu_ind(ind) 
    education_ref.current.value=data1
    date_ref.current.value=data3
    institute_ref.current.value=data2
    setupdate(true)
  }
  useEffect(() => {
  if(file){
    setShow(true);
  }
  }, [file]);
  const handle_change_age=(event)=>{
    console.log(event.target.value);
    setage(event.target.value) 
    const birthDate = new Date(age); 
    const difference = Date.now() - birthDate.getTime();
    const age_ = new Date(difference);
    const _fillinput_date = Math.abs(age_.getUTCFullYear() - 1970);
     console.log(_fillinput_date)
     age_ref.current.value=_fillinput_date
  }
  const On_Submit=(e)=>{
    e.preventDefault()
     if(Fullname_ref.current.value==0){
      seterror_show1(true)
     
     }if(Fullname_ref.current.value!=0){
      seterror_show1(false)
     }
     if(Fathername_ref.current.value==0){
      seterror_show2(true)
     }if(Fathername_ref.current.value!=0){
      seterror_show2(false)
     }
     if(Guardianname_ref.current.value==0){
      seterror_show3(true)
     }if(Guardianname_ref.current.value!=0){
      seterror_show3(false)
     }
     if(Emailaddres_ref.current.value==0){
      seterror_show4(true)
     }if(Emailaddres_ref.current.value!=0){
      seterror_show4(false)
     }
     if(Phoneno_ref.current.value==0){
      seterror_show5(true)
     }if(Phoneno_ref.current.value!=0){
      seterror_show5(false)
     }
     if(altPhoneno_ref.current.value==0){
      seterror_show6(true)
     }if(altPhoneno_ref.current.value!=0){
      seterror_show6(false)
     }
     if(address_ref.current.value==0){
      seterror_show7(true)
     }if(address_ref.current.value!=0){
      seterror_show7(false)
     }
     if(dob_ref.current.value==0){
      seterror_show8(true)
     }if(dob_ref.current.value!=0){
      seterror_show8(false)
     }
     if(age_ref.current.value==0){
      seterror_show9(true)
     }if(age_ref.current.value!=0){
      seterror_show9(false)
     }
     if(age_ref.current.value<18 &&age_ref.current.value>0){
      seterrorage(true)
     }if(age_ref.current.value>18){
      seterrorage(false)
     }
     if(gender==0){
      seterror_show10(true)
     }if(gender!=0){
      seterror_show10(false)
     }
     if(chechbox_value1  ==0){
      seterror_show11(true)
     }if(chechbox_value1 || chechbox_value2 || chechbox_value3 !=0){
      seterror_show11(false)
     }
      if(department_ref.current.value==0){
        
        seterror_show12(true)
      }if(department_ref.current.value!=0){
     
        seterror_show12(false)
      }
      if(desighnation_ref.current.value==0){
        
        seterror_show13(true)
      }if(desighnation_ref.current.value!=0){
       
        seterror_show13(false)
      }
      if(file_ref.current.value==0){
        
        seterror_show14(true)
      } if(_pure_files.type=='application/pdf' ){
        seterror_show14(false)
        seterror_show14_file(false)
      }else if(file_ref.current.value!=0){
        console.log('not pdf')
        seterror_show14_file(true)
      }
       
      if(file_ref.current.value!=0){
        seterror_show14(false)
      }
      if(image_ref.current.value==0){
        console.log('true')
        seterror_show15(true)
      }if(image_ref.current.value!=0){
        seterror_show15(false)
      }
    if((Fullname_ref.current.value && Fathername_ref.current.value && Guardianname_ref.current.value && 
      Emailaddres_ref.current.value && Phoneno_ref.current.value && altPhoneno_ref.current.value && address_ref.current.value &&
      dob_ref.current.value && age_ref.current.value && gender_ref.current.value && department_ref.current.value &&
      desighnation_ref.current.value && image_ref.current.value && file_ref.current.value !==0) && (check_ref1.current.value || check_ref2.current.value || check_ref3.current.value !==0) && (age_ref.current.value>17) &&(_pure_files.type=='application/pdf')){
        const _parent_object ={
      _full_name:Fullname,
      _fathername:Fathername,
      _guardian_name:Guardianname,
      _email:Email,
      _phone_no:Phoneno,
      _alt_ph_no:altPhoneno,
      _address:address,
      _dob:age,
      _age:age_ref.current.value,
      _gende:gender,
      _skill1:chechbox_value1,
      _skill2:chechbox_value2,
      _skill3:chechbox_value3,
      _depat:Department,
      _disign:Desighnation
    }
  const url = 'http://localhost:4000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('file_s',(_pure_files));
    formData.append('emp_object',(JSON.stringify(_parent_object)));
    formData.append('array',(JSON.stringify(artists)));
    console.log(formData)
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url,formData, config)
      .then((response) => {
        console.log(response.data);
        alert(response.data)
        navigate('/contacts/about')
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
   
    }else{
     alert('Fill Require Data')
    }
  }
  useEffect(() => {
    axios.get('http://localhost:4000/get/dropdown/details').then((res)=>{
     setdrOpdownData(res.data)
    }).catch((error)=>{
      alert('drop down failed')
    })
  }, []);
 const Nevigatelist=()=>{
  navigate('/contacts/about')
 }
 const onchangFullnmae=(event)=>{
  setFullname(event.target.value)
 }
 const UpdateFuntion=()=>{
  navigate('/contacts/about')
 }
   
  return (
   <div className='Form_Parent'>
    { isLoading ?  <><Form onSubmit={On_Submit} method='post' action='http://localhost:4000/uploadFile'>
        <Container sm={12}>
          <Stack gap={3}>
            <Row>
              <Col className='UPDATE'>
                {_data && <div><div className='U'>Update</div>Form</div>}
              </Col>
            </Row>
            <Row>
              <Col className='regis'>
                <div><span className='R'>P</span>ersonal Details</div>
              </Col>

              <Col className='list_button_parent'>
                <button className='list_button' type='button' onClick={Nevigatelist}>List</button>
              </Col>
            </Row>
            <Row>
              <Col x={12}>
                <div>
                  <label>Fullname</label>
                </div>
                <div>
                  <input className='_input' placeholder='Enter your name'
                    onChange={onchangFullnmae}
                    ref={Fullname_ref} value={Fullname}

                    name='_Fullname' />{error_show1 && <div className='required'><div></div>required</div>}
                </div>
              </Col>
              <Col>
                <div>
                  <label>FatherName</label>
                </div>
                <div>
                  <input className='_input' placeholder='Enter your Fathername' type='text'
                    onChange={(e) => { setFathername(e.target.value); } }
                    ref={Fathername_ref} value={Fathername} />{error_show2 && <div className='required'><div></div>required</div>}
                </div>
              </Col>
              <Col>
                <div>
                  <label>Guardian name</label>
                </div>
                <div>
                  <input className='_input' placeholder='Enter your Fathername' type='text'
                    onChange={(e) => { setGuardianname(e.target.value); } }
                    ref={Guardianname_ref} value={Guardianname} />{error_show3 && <div className='required'><div></div>required</div>}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <label>Email</label>
                </div>
                <div>
                  <input className='_input' placeholder='Enter your Email' type='email'
                    onChange={(e) => { setEmail(e.target.value); } }
                    ref={Emailaddres_ref} value={Email} />{error_show4 && <div className='required'><div></div>required</div>}
                </div>
              </Col>
              <Col>
                <div>
                  <label>Phonenumber</label>
                </div>
                <div>
                  <input className='_input' placeholder='Enter your Number' type='number'
                    onChange={(e) => { setPhoneno(e.target.value); } }
                    ref={Phoneno_ref} value={Phoneno} />{error_show5 && <div className='required'><div></div>required</div>}
                </div>
              </Col>
              <Col>
                <div>
                  <label>Alternativenumber</label>
                </div>
                <div>
                  <input className='_input' placeholder='Enter your Fathername' type='number'
                    onChange={(e) => { setaltPhoneno(e.target.value); } }
                    ref={altPhoneno_ref} value={altPhoneno} />{error_show6 && <div className='required'><div></div>required</div>}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <label>Address</label>
                </div>
                <div>
                  <input className='_input' placeholder='Enter your Addres' type='text'
                    onChange={(e) => { setaddress(e.target.value); } }
                    ref={address_ref} value={address} />{error_show7 && <div className='required'><div></div>required</div>}
                </div>
              </Col>
              <Col>
                <div>
                  <label>DOB</label>
                </div>
                <div>
                  <input className='_input' type='date'
                    onChange={handle_change_age}
                    ref={dob_ref} value={dob}
                  ></input>{error_show8 && <div className='required'><div></div>required</div>}
                </div>
              </Col>
              <Col>
                <div>
                  <label>Age</label>
                </div>
                <div>
                  <input ref={age_ref} className='_input' value={age1} onChange={(e) => { setage1(e.target.value); } } placeholder='Enter your Age' readOnly />{error_show9 && <div className='required'><div></div>required</div>}
                  <div>
                    {errorage && <div className='required'><div></div>age must be  18</div>}
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>Gender</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <input type='radio' id='male' ref={gender_ref} name='topping' onChange={(e) => { setgender(e.target.value); } } value='male' defaultChecked={editdata10 == 'male'}></input>  <div htmlfor='male'>male</div>
                </div>
              </Col>
              <Col>
                <div>
                  <input type='radio' id='female' name='topping' defaultChecked={editdata10 == 'female'} value='female' onChange={(e) => { setgender(e.target.value); } }
                    ref={gender_ref}
                  ></input>  <div htmlfor='female'>Female</div>
                </div>
              </Col>
              <Col>
                <div>
                  <input type='radio' id='others' name='topping'
                    defaultChecked={editdata10 == 'others'} value='others'
                    onChange={(e) => { setgender(e.target.value); } }
                    ref={gender_ref}
                  ></input>  <div htmlfor='others'>Others</div>
                </div>
              </Col>
              <Col>
                {error_show10 && <div className='required'><div></div>required</div>}
              </Col>
            </Row>
            <Row>
              <Row>
                <Col>
                  <div>Skills</div>
                </Col>
              </Row>
              <Col>
                <div>
                  <input type='checkbox' ref={check_ref1} defaultChecked={editdata11} onChange={() => { checkbox_one('react'); } }></input><div>React</div>
                </div>
              </Col>
              <Col>
                <div>
                  <input type='checkbox' ref={check_ref2} defaultChecked={editdata12} onChange={() => { checkbox_one('jquery'); } }></input><div>Jquery</div>
                </div>
              </Col>
              <Col>
                <div>
                  <input type='checkbox' ref={check_ref3} defaultChecked={editdata13} onChange={() => { checkbox_one('flutter'); } }></input><div>Flutter</div>
                </div>
              </Col>
              <Col>
                {error_show11 && <div className='required'><div></div>required</div>}
              </Col>
            </Row>
            <Row>
              <Col className='_Department'>
                <div > Department</div>
                <select className='_select' ref={department_ref} value={Department} onChange={(e) => { setDepartment(e.target.value); } }>
                  <option> </option>
                  <> {drOpdownData.map((droPdata) => (
                    <option>{droPdata.dePartMent}</option>
                  ))}
                  </>
                </select>{error_show12 && <div className='required'><div></div>required</div>}
              </Col>
              <Col className='_Desighnation'>
                <div>Desighnation</div>
                <select className='_select' ref={desighnation_ref} value={Desighnation} onChange={(e) => { setDesighnation(e.target.value); } }>
                  <option></option>
                  <> {drOpdownData.map((droPdata) => (
                    <option>{droPdata.deSignation}</option>
                  ))}
                  </>
                </select>{error_show13 && <div className='required'><div></div>required</div>}
              </Col>
            </Row>
            <Row>
              <Row>
                <Col>
                  <div className='Files'>
                    <div>
                      <label>Resume</label>
                    </div>
                    <input type='file' name='file' ref={file_ref} onChange={(event) => { set_pure_files(event.target.files[0]); } }></input>
                    {error_show14_file && <div className='required'><div></div>Accept only pdf</div>}{error_show14 && <div className='required'><div></div>required</div>}
                  </div>
                </Col>
                <Col>
                  <div className='Files'>
                    <div>
                      <label>Photo</label>
                    </div>
                    <input type='file' accept="image/*" name='file_s' ref={image_ref} onChange={Image_priview}></input>{error_show15 && <div className='required'><div></div>required</div>}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className='qulif'><span className='Q'>Q</span>ualification</div>
                </Col>
              </Row>

              <Col className='_education_parent'>
                <div>Education</div>
                <div>
                  <select className='_education' ref={education_ref} onChange={(e) => { setEducation(e.target.value); } }>
                    <option disabled selected value> -- select an option -- </option>
                    <option>MechanicalEngineering</option>
                    <option>Computer science</option>
                    <option>information technology</option>
                    <option>Mechatronics </option>
                  </select>
                </div>
              </Col>
              <Col className='_Institute_parent_year' >
                <div>Year</div>
                <div>
                  <input ref={date_ref} className='_qualiu_year'type='date' onChange={(e) => { setStartDate(e.target.value); } }></input>
                </div>
              </Col>
              <Col  className='_Institute_parent'>
                <div>Institute</div>
                <div>
                  <input type='text' className='_Institute_parent_input' ref={institute_ref} onChange={(e) => { setInstitute(e.target.value); } }></input>
                </div>
              </Col>
              <Col>
                <div style={{ opacity: "0" }}>dgfdh</div>
                {update ? <div><button style={{ color: "white", backgroundColor: "blue" }} type='button' onClick={Update_edu_data}>update</button></div> : <div><BsFillPlusCircleFill size={25} className='plus_icon' onClick={Updating_array_state} /></div>}</Col>
            </Row>

            <Row>
              <table style={{ marginTop: "20px", backgroundColor: "white", textAlign: "center" }} className='qulai_table'>
                <tr style={{ border: "1px solid black" }}>
                  <th style={{ border: "1px solid black" }}>SLno</th>
                  <th style={{ border: "1px solid black" }} className='quali_educ'>Education</th>
                  <th style={{ border: "1px solid black" }}>Year</th>
                  <th>Institute</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                {artists.map((artist, index) => (
                  <tr>
                    <td key={artist.id}> {index + 1}</td>
                    <td>{artist.name} </td>
                    <td>{artist.year}</td>
                    <td>{artist.ename} </td>

                    <td style={{ color: "red", cursor: "pointer" }} onClick={() => { Edit_edu_data(artist.name, artist.ename, artist.year, artist.id, index); } }><BiEdit /></td>
                    <td style={{ color: "red", cursor: "pointer" }}><RiDeleteBin6Fill
                      onClick={() => { Delete_array_object(index); } } /></td>
                  </tr>
                )
                )}
              </table>
            </Row>
            <Row>
              <div>
                {_data ? <button className='_button' type='button' onClick={UpdateFuntion}>update</button> : <button className='_button' type='submit'>Submit</button>}
              </div>
            </Row>
          </Stack>

        </Container>
      </Form><Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img src={(_file)} style={{ width: "300px" }}></img>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={Set_image_file}>
              Save
            </Button>
          </Modal.Footer>
        </Modal></>
      :
      <div className='spinner_home'>
        <Newform/>
      </div>}
    </div>
  )
}
export default Home