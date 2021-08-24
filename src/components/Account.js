import React, {useState, useEffect} from 'react';
import {Button} from "./Componet-style";
import AccountSchema from './Schema/AccountSchema'
import * as yup from 'yup'
import axios from "axios";
// import * as yup from "yup"


const errorMassage ='please try again the creation of account was not successful'
const Account = (props) => {




    // to keep track of your input

    const [info, setInfo] = useState({
        name: '',
        lastName: "",
        //////////
        email: "",
        password: '',
        terms: false,
        ///////

    })

    // to keep track of our errors

    const [errors, setErrors] = useState({
        name: '',
        lastName: "",
        //////////
        email: "",
        password: '',
        terms: "",
        ///////

    })

    const [axiosSuccess , setAxiosSuccess] = useState()
    const  [axiosFail ,setAxiosFail] = useState()

    const [disabled, setDisabled] = useState(true)

useEffect(()=>AccountSchema.isValid(info).then(valid => {
    setDisabled(!valid)
})[info])

    const validation = (name, value) => {

        yup.reach(AccountSchema, name).validate(value).then(valid => {
            setErrors({...errors, [name]: ''})
        }).catch(err => {

            setErrors({
                ...errors, [name]: err.errors[0]
            })
        });
    };

    const changeinput = (event) => {
        event.persist()
        const {value, name, type, checked} = event.target
        const newValue = type === "checkbox" ? checked : value
        validation(name, newValue)
        setInfo({...info, [name]: newValue})
    }



    const submit = (event) => {
        event.preventDefault()
        axios.post("www.changeMeLater.com", info)
            .then(response => {axiosSuccess(response.data)
                setInfo({name: '', lastName: "", email: "",password: '',terms: false,})})
            .catch(err => {
                setInfo({name: '', lastName: "", email: "",password: '',terms: false,})
                    setAxiosFail(errorMassage)

                }

            )
        props.history.push('/login', {email:info.email})
        // console.log(axiosFail)
    }



    return (
        <form onSubmit={submit}>
            <label htmlFor={'name'}> Name:
                <input
                    data-cy={'name'}
                    id={'name'}
                    name="name"
                    onChange={changeinput}
                    value={info.name}
                    placeholder={'write your name'}
                />

                {/*after yup is fully finished */}

                {errors.name.length > 0 ? <p className={"error"}>{errors.name}</p> : null}

            </label>
            <label htmlFor={"lastName"}> Last Name:
                <input
                    data-cy={"lastName"}
                    name={'lastName'}
                    onChange={changeinput}
                    value={info.lastName}
                    placeholder={'tell your your last name'}
                />
                {errors.lastName.length > 0 ? <p className={"error"}>{errors.lastName}</p> : null}
            </label>

            {/*/////////////////////////////////////////////////// email password and checkbox   //////////////////////////*/}

            <label htmlFor={'email'}> Email
                <input
                    data-cy={"email"}
                    id={'email'}
                    name="email"
                    onChange={changeinput}
                    value={info.email}
                    placeholder={'Enter your email'}
                    type="email"
                />
                {errors.email.length > 0 ? <p className={"error"}>{errors.email}</p> : null}
            </label>

            <label htmlFor={'password'}> Password
                <input
                    data-cy={"password"}
                    id={'password'}
                    name="password"
                    onChange={changeinput}
                    value={info.password}
                    type={"password"} placeholder={"Enter your password"}
                />
                {errors.password.length > 0 ? <p className={"error"}>{errors.password}</p> : null}
            </label>

            <label htmlFor={'terms'}> Terms and Conditions

                <input
                    data-cy={"terms"}
                    type="checkbox"
                    name="terms"
                    checked={info.terms}
                    value={info.terms}
                    onChange={changeinput}
                />
                {errors.terms.length > 0 ? <p className={"error"}>{errors.terms}</p> : null}
            </label>




            <button  data-cy={"submit"} disabled={disabled}>submit</button>
            <br/>
            {axiosFail=== errorMassage? <h3 className={"errorMassage"}> {errorMassage}</h3> :null}
            {/*{info.name.length > 0  ? setAxiosFail(null): setAxiosFail(()=>axiosFail)}*/}

        </form>
    )


}
export default Account