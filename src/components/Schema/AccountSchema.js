
import * as yup from "yup"


const AccountSchema = yup.object().shape({
    name: yup.string().trim().required("name is required").min(3,'name should be at least 3 characters long'),
    lastName: yup.string().trim().required("last Name is required").min(5,'name should be at least 5 characters long'),
    email: yup.string().email("must be a valid email address").required(),
    password:yup.string().required('password is required').min(5,'password should be at least 5 characters long'),
    terms: yup.boolean().oneOf([true], "please agree with us"),



})

export default  AccountSchema


// export const loginSchema = yup.object().shape({
//     email:yup.string().email("must be a valid email address").required(),
//     password:yup.string().required('password is required').min(5,'password should be at least 5 characters long'),
// })


