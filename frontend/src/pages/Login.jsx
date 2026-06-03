import React,{useState} from 'react'

const Login = () => {

  const [state,setState] = useState('Sign Up')

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  const handleSubmit = async(event)=>{
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center min-h-[80vh] '>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-300 rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment</p>
        <div>
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)} value={name}
          />
        </div>
        <div>
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)} value={name} required
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} value={email} required
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} value={password} required
          />
        </div>
        <button type="submit">{state === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
       
      </div>
      
    </form>
  )
}

export default Login
