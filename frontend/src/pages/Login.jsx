import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center min-h-[80vh] '>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-300 rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment</p>
        {state === 'Sign Up' &&
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 w-full p-2 mt-1'
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)} value={name} required
            />
          </div>

        }

        <div className='w-full'>
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            className='border border-zinc-300 w-full p-2 mt-1'
            value={email}
            onChange={(e) => setEmail(e.target.value)} value={email} required
          />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} value={password} required
          />
        </div>
        <button className='bg-primary text-white p-2 w-full text-base rounded-md hover:bg-blue-600' type="submit">{state === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
        {
          state === 'Sign Up'
            ? <p>Already have an account? <span className='text-primary hover:underline cursor-pointer' onClick={() => setState('Login')}>Login here</span></p>
            : <p>Create a new account? <span className='text-primary hover:underline cursor-pointer' onClick={() => setState('Sign Up')}>click here</span></p>
        }

      </div>

    </form>
  )
}

export default Login
