import React, {useEffect, useState} from 'react';
import axios from 'axios'
import * as yup from 'yup'
import LoginSchema from './Schema/LoginSchema'


const errorMassage =' Login was not successful please try again'
const Login = () => {
    const [login,setLogin] = useState({
        email:'',
        password:''
    })
    const [errors,setErrors] = useState({
        email:'',
        password:''
    })

    const [disabled,setDisabled] = useState(true)
    const [axiosSuccess , setAxiosSuccess] = useState()
    const  [axiosFail ,setAxiosFail] = useState()

    useEffect(()=>{
        LoginSchema.isValid(login).then(valid => {
            setDisabled(!valid)
        })
    },[login])


    const validateChange = e => {
        yup
            .reach(LoginSchema, e.target.name) // get the value out of schema at key "e.target.name" --> "name="
            .validate(e.target.value) // value in input
            .then(valid => {
                setErrors({ ...errors, [e.target.name]: "" });
            })
            .catch(err => {
                // if failing validation, set error in state
                console.log("error!", err);
                setErrors({ ...errors, [e.target.name]: err.errors[0] });
            });
    };




const change = (event) => {
    event.persist()
        const {value, name} =event.target
    validateChange(event)
    setLogin({...login,[name]:value})

    }

    const  submit = (event)=> {
        event.preventDefault()
        axios.post("changeMeLater.com",login)
            .then(response => {
                setAxiosSuccess(response.data)
                setLogin({ email:'', password:''})
            })
            .catch(error => {
                setLogin({ email:'', password:''})
                setAxiosFail(errorMassage)})
    }
    return (
        <div className={"login"} >
     <form onSubmit={submit}>
         <label htmlFor={'email'}>
             Email:
             <input type="email" name="email" value={login.email} onChange={change} placeholder={"Enter your email"}/>
         </label>
         {errors.email.length > 0? <p className={'error'}>{errors.email}</p>:null}
<br/>
         <label htmlFor={'password'}>
             Password:
             <input type="password" name="password" value={login.password} onChange={change} placeholder={"Enter your password"}/>
         </label>
         {errors.password.length > 0? <p className={'error'}>{errors.password}</p>:null}
 <br/>
         <button disabled={disabled} type={'submit'}>Login</button>
         {axiosFail=== errorMassage? <h3 className={"errorMassage"}> {errorMassage}</h3> :null}

     </form>
        </div>
    )

}
export default  Login