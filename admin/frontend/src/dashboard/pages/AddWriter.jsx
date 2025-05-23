import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import {base_url} from '../../config/config'
import storeContext from '../../context/storeContext'

const AddWriter = () => {

  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  })
  const inputHandler = (e) =>{
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }
  const [loader,setLoader] = useState(false)
  
  const submit = async (e) => {
    e.preventDefault()
    try {
      setLoader(true)
      const { data } = await axios.post(`${base_url}/api/news/writer/add`, 
        state, {
          headers : {
            'Authorization' : `Bearer ${store.token}`
          }
        })
        setLoader(false)
        toast.success(data.message)
        navigate('/dashboard/writers')
    }catch (error) {
      setLoader(false)
      toast.success(data.message)
    }
  }

  return (
    <div className='bg-white rounded-md'>
      <div className=' flex justify-between p-4'>
          <h2 className='text-x1 font-medium'>Add writers</h2>
          <Link className='px-3 py-[6px] bg-purple-500 rounded-md text-white
              hover:bg-purple-600' to='/dashboard/writers'>Writers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='name'>Name</label>
              <input onChange={inputHandler} value={state.name} required type='text' placeholder='name' name='name' className='px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-green-500 h-10' id='name'/>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='email'>Email</label>
              <input onChange={inputHandler} value={state.email} required type='email' placeholder='email' name='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-green-500 h-10' id='email'/>
            </div>
            <div className='flex flex-col gap-y-2'>
              <div className='flex flex-col gap-y-2'>
                <label className='text-md font-medium text-gray-600' htmlFor='password'>Password</label>
                <input onChange={inputHandler} value={state.password} required type='password' placeholder='password' name='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300
                focus:border-green-500 h-10' id='password'/>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <button disabled={loader} className='px-3 py-[6px] bg-purple-500 rounded-md text-white hover:bg-purple-600'>{loader ? 'Loading...':'Add Writer'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddWriter
