import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'preyanka debnath',
    image: assets.profile_pic,
    email: 'preyankadebnath2002@gmail.com',
    phone: '123-456-7890',
    address: {
      line1: '3100,Noyasorok,Thikana tower',
      line2: 'Sylhet,Bangladesh'
    },
    gender: 'Female',
    dob: '2002-01-01'

  })
  const [isEdit, setIsEdit] = useState(true)

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {
        isEdit
          ? <input className="bg-gray-50 text-3xl font-medium max-w-6- mt-4" type="text" value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className="text-3xl text-neutral-800 mt-4 font-medium">{userData.name}</p>
      }
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className='font-medium'>Email id:</p>
          <p className="text-blue-700">{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input className="bg-gray-100 max-w-52" type="text" value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className="text-blue-400">{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit
            ? <p>
              <input className="bg-gray-50" onChange={(e) => setUserData(prev=> ({...prev,address:{...prev.address, line1:e.target.value}}))} value={userData.address.line1} type="text" />
              <br />
              <input className="bg-gray-50" onChange={(e) => setUserData(prev=> ({...prev,address:{...prev.address, line2:e.target.value}}))} value={userData.address.line2} type="text" />
            </p>
            :<p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }

        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {
            isEdit
              ? <select value={userData.gender} onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                <option value="Male">Male</option>
                <option value="Female">Female </option>
                <option value="Other">Other</option>
              </select>
              : <p>{userData.gender}</p>
          }
          <p>BirthDay:</p>
          {
            isEdit
              ? <input type="date" value={userData.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
              : <p>{userData.dob}</p>
          }
        </div>
      </div>
      <div>
        {
          isEdit            
            ? <button onClick={() => setIsEdit(false)}>Save information</button>
            : <button onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
