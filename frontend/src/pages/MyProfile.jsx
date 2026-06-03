import React,{useState} from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData,setUserData] = useState({
    name:'preyanka debnath',
    image:assets.profile_pic,
    email:'preyankadebnath2002@gmail.com',
    phone:'123-456-7890',
    address:{
      line1:'3100,Noyasorok,Thikana tower',
      line2:'Sylhet,Bangladesh'
    },
    gender:'Female',
    dob:'2002-01-01'
    
  })
  const [isEdit,setIsEdit] = useState(false)

  return (
    <div>
      <img src={userData.image} alt=""/>
      {
        isEdit
        ?<input type="text" value={userData.name} onChange={(e)=>setUserData(prev => ({...prev, name: e.target.value}))}/>
        :<p>{userData.name}</p>
      }
      <hr/>
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
             isEdit
            ?<input type="text" value={userData.phone} onChange={(e)=>setUserData(prev => ({...prev, phone: e.target.value}))}/>
            :<p>{userData.phone}</p>
          }
         
        </div>
      </div>
    </div>
  )
}

export default MyProfile
