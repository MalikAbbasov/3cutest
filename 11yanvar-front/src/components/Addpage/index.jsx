import React, { useState } from 'react'
import "./add.scss"
import { useNavigate } from 'react-router-dom'

import { Formik, Form, useField, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';


function Addpage() {
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:5000/", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image, name, price })
    })
    navigate("/")
  }

  function handleChange(e, stateChanger) {
    stateChanger(e.target.value)
  }

  return (



    <div>

      <div id="add">
        <h1>Add Your Flower</h1>


        <div className="myform">
          <form action="#" onSubmit={handleSubmit}>
            <input type="text" value={image} onChange={(e)=>handleChange(e, setImage)} placeholder='Add image' />
            <input type="text" value={name} onChange={(e)=>handleChange(e, setName)} placeholder='Add name'/>
            <input type="text" value={price} onChange={(e)=>handleChange(e, setPrice)} placeholder='Add price'/>
            <button>Add to cards</button>
          </form>
        </div>
      </div>
    </div>


    // <Formik
    //   initialValues={{ image: '', name: '', price: '' }}
    //   validationSchema={Yup.object({
    //     image: Yup.string()
    //       .max(15, 'Must be 15 characters or less')
    //       .required('Required'),
    //       name: Yup.string()
    //       .max(20, 'Must be 20 characters or less')
    //       .required('Required'),
    //       price: Yup.string().name('Invalid email address').required('Required'),
    //   })}
    //   onSubmit={(values, { setSubmitting }) => {
    //     setTimeout(() => {
    //       alert(JSON.stringify(values, null, 2));
    //       setSubmitting(false);
    //     }, 400);
    //   }}
    // >
    //    <Form>
    //      <label htmlFor="image">Image url</label>
    //      <Field image="image" type="text" />
    //      <ErrorMessage image="image" />
 
    //      <label htmlFor="name">Flower Name</label>
    //      <Field name="name" type="text" />
    //      <ErrorMessage name="name" />
 
    //      <label htmlFor="price">Price</label>
    //      <Field price="price" type="number" />
    //      <ErrorMessage price="price" />
 
    //      <button type="submit">Submit</button>
    //    </Form>
    // </Formik>
  )
}

export default Addpage