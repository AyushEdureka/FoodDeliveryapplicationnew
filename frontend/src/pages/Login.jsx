import  React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Login = ()=>{
       const {login} = useContext(UserContext)

    const [form,setForm] = useState({email:'',password:''})
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setForm({...form , [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        //This replace By Backend 
          try{
         const res  = await   fetch('https://fooddeliveryapplicationnew.onrender.com/api/users/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(form)
         }) 

         const data = await res.json()

         if(res.ok){
            login(data)
            navigate('/')
         }else{
            alert(data.error || 'Login Failed')
         }
        }catch(err){
            alert('Server Error')
        }
    }

    



    return(
        <div className="container mt-5" style={{maxWidth:'500px'}}>
            <h3 className='text-center mb-4'>Login</h3>
            <form onSubmit={handleSubmit}>
                <input  className='form-control mb-3' name="email" value={form.email} onChange={handleChange} placeholder='Email' required/>
                <input  className='form-control mb-3' name="password" value={form.password} onChange={handleChange} placeholder='Password' required/>
                <button className='btn btn-success w-100' type="submit">Login</button>
            </form>
        </div>
    )

}
export default Login
