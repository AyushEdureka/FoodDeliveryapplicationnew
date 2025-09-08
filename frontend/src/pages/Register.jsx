import  React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Register = ()=>{
    const [form,setForm] = useState({name:'',email:'',password:''})
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setForm({...form , [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
       
        try{
         const res  = await   fetch('https://fooddeliveryapplicationnew.onrender.com/api/users/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(form)
         }) 

         const data = await res.json()

         if(res.ok){
            alert('Registered Sucessfully!, Now Login')
            navigate('/login')
         }else{
            alert(data.error || 'Something went wrong')
         }
        }catch(err){
            alert('Server Error')
        }
    }



    return(
        <div className="container mt-5" style={{maxWidth:'500px'}}>
            <h3 className='text-center mb-4'>Create Account</h3>
            <form onSubmit={handleSubmit}>
                <input  className='form-control mb-3' name="name" value={form.name}  onChange={handleChange} placeholder='Name' required/>
                <input  className='form-control mb-3' name="email" value={form.email} onChange={handleChange} placeholder='Email' required/>
                <input  className='form-control mb-3' name="password" value={form.password} onChange={handleChange} placeholder='Password' required/>
                <button className='btn btn-primary w-100' type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
