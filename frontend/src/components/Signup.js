import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

const Signup = () => {

  // this function will be called on form submit
  const userSubmit = async (formdata) => {
    console.log(formdata);

    // to send request on backend we need a few details
    // 1. url
    // 2. request method
    // 3. Data to Send
    // 4. Data format

    // fetch,,,,asynchronous function - returns promise
      const response = await fetch('http://localhost:5000/user/add',{
        method : 'POST',
        body : JSON.stringify(formdata),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

       // task B

       if(response.status === 200){
        console.log('request sent successfully');
          Swal.fire({
            icon: "success",
            title : 'Well Done',
            text : 'Registered Successfully'


          })
        

       }else{
        Swal.fire({
          icon: "error",
          title : 'Oops!',
          text : 'Some error occurred'


        })
        console.log('some error occured');
       }



    }
  return (
    <div className ='container'>
      <h3 className='my-3 text-center'>Register User</h3>

      <Formik initialValues={{ name:'',email : '',password :'', age : 0}}
      onSubmit={userSubmit}>
        {({values, handleChange, handleSubmit})  => (
          <form onSubmit={handleSubmit}>
    
          <label>Name</label>
          <input value={values.name} id="name" onChange={handleChange} className='form-control mb-3' />
          
          <label>Email</label>
          <input value={values.email} id="email" onChange={handleChange} className= 'form-control mb-3 ' />
      
          <label>Password</label>
          <input value={values.password} id="password" onChange={handleChange} type = "password" className='form-control mb-3' />
      
          <label>Age</label>
          <input value={values.age} id="age" onChange={handleChange} type="number" className='form-control mb-3' />
          
          <button type='submit' className='btn btn-primary mt-5'>Submit</button>
      
          </form>

        )}
      </Formik>
      
    </div>
  )
}

export default Signup;