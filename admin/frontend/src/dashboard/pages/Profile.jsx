import React from 'react'
import { FaImage } from "react-icons/fa6";

const Profile = () => {

  return (
    <div className='w-full grid grid-cols-2 gap-x-6 mt-5'>
      <div className='bg-white gap-x-3 p-6 rounded flex justify-center items-center'>
        <div>
          <label htmlFor='img' className={'w-[150px] h-[150px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashhed'}>
            <div className='flex justify-center border-2 items-center flex-col gap-y-2'>
              <span className='text-2x1'><FaImage /></span>
              <span>Select Image</span>
            </div>
          </label>
          <input className='hidden' type='file' id='img'/>
        </div>
        <div  className='text-[#404040] flex flex-col gap-y-1 just items-start'>
          <span>Nama  : Rizky</span>
          <span>Email : rizky123@gmail.com</span>
          <span>Category: Politik</span>
        </div>
      </div>
      <div className='bg-white p-6 py-4 text-[#404040]'>
        <h2 className='pb-3 text-center'>Change Password</h2>
        <form>
          <div className='grid grid-cols-1 gap-x-5 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <div className='flex flex-col gap-y-2'>
                <label className='text-md font-medium text-gray-600' htmlFor='old_password'>Old Password</label>
                <input type='old_password' placeholder='old_password' name='old_password' className='px-3 py-2 rounded-md outline-0 border border-gray-300
                focus:border-green-500 h-10' id='old_password'/>
              </div>
            </div> 
            <div className='flex flex-col gap-y-2'>
              <div className='flex flex-col gap-y-2'>
                <label className='text-md font-medium text-gray-600' htmlFor='new_password'>New Password</label>
                <input type='new_password' placeholder='new_password' name='new_password' className='px-3 py-2 rounded-md outline-0 border border-gray-300
                focus:border-green-500 h-10' id='new_password'/>
              </div>
            </div>
            </div>
            <div className='mt-4'>
              <button className='px-3 py-[6px] bg-purple-500 rounded-md text-white hover:bg-purple-600'>Change Password</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
