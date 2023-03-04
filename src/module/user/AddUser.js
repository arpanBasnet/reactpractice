import React, { useEffect, useState } from "react";
import { Formik } from 'formik';
import { MyContext } from "../../App";


function AddUser() {
  const value = React.useContext(MyContext);  
  var a=5;

  const [val,setVal]=useState(5);
  const[data,setData]=useState([
    {
      userId:1,
      userName:"admin",
      userType:"1"
    },
    {
      userId:2,
      userName:"admin",
      userType:"1"
    }
  ])
  const [token,setToken]=useState("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW0iLCJleHAiOjE2Nzc5NDI2NjUsImlhdCI6MTY3NzkwNjY2NSwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkFETUlOIn1dfQ.oB2TYcHlHaEEzDgtoW4JdGWYButQfo2Ylno0vZpOlyQ");

  const GetUser=()=>{
///////////////////
return;
  fetch("http://192.168.0.107:8081/bookrental/author", {
            method: "get",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization':'Bearer '+token
            },

          })
          .then((response) => response.json())
      .then((json) => {
        alert(json.data[0].authorName)
      });
////////////////////

    fetch("http://192.168.0.107:8081/bookrental/author")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        //console.log(json.data);
      });
  }

  useEffect(()=>{
    GetUser();
  },[])

  //useeeffetct

  
  useEffect(()=>{
    //alert("on each render")
  })

  useEffect(()=>{
    //alert("on state change")
  },[val])

 


    return (<>
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        value(1)
        return;
         setTimeout(() => {
          value(1)
          return;
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 4000);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
      
    </>)
  }
  
  export default AddUser;
  