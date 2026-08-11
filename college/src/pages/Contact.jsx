import React from 'react'
import { useActionState } from 'react'

function Contact() {
  const handleFormData = async(prevData,formData) =>{
    const name = formData.get("name")
    const number = formData.get("number")
    const userDetails = {
      name:name,
      number:number
    }

    let response = await fetch("http://localhost:3000/contact",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(userDetails)
    })
    response = await response.json()
    console.log(response.message);
    
  }
  const [data,action,isPending] = useActionState(handleFormData,undefined)
  return (
    <div>
      <h1>Contact Us</h1>
    <form action={action}>
        <input type="text" placeholder="enter your name" name='name'/><br/><br/>
        <input type="text" placeholder="enter your number" name='number'/><br/><br/>
        <button type="submit">Contact</button>
    </form>
    </div>
  )
}

export default Contact