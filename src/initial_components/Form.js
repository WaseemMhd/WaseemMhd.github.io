import './Formstyle.css'
import emailjs from '@emailjs/browser';
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import React,{useState,useRef} from 'react'

function Form() {

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    const form = useRef();

    const handleclick=(e)=>{
        e.preventDefault();

        if(!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim())
        {
           return toast.info("Please Fill all Field")
        }
        else{
            emailjs.sendForm('service_7x18faf', 'template_wdaccmy', form.current, 'aC6-hiFuJdIwBuFZV')
            .then((result)=>{
                console.log(result)
                return toast.success("Form submitted Succesfully")
            },
            (error)=>{
                return toast.warning("Please Connect your network")
            })
          
            
        }
        
    }

   const handleChange=(e)=>{
    const {name,value}=e.target;

    setFormData(previnput=>{
        return{
            ...previnput,
            [name]:value
        }

    })
   }

  return (
    <div className='form'>
        <form ref={form}>
            <ToastContainer position='bottom-center' limit={1}/>
            <label>Your Name</label>
            <input name='name' type='text' required onChange={handleChange} value={formData.name}/>
            <label>Your Email</label>
            <input name='email' type='email' required onChange={handleChange} value={formData.email}/>
            <label>Subject</label>
            <input name='subject' type='text' required onChange={handleChange} value={formData.subject}/>
            <label>Message</label>
            <textarea rows={6} placeholder="Enter your message here" name='message' required onChange={handleChange} value={formData.message}/>
            <button className='btn'  onClick={handleclick}>Submit</button>
        </form>
      
    </div>
  )
}

export default Form





