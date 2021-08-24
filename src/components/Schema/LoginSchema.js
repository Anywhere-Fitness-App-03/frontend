import * as yup from "yup"

 const LoginSchema = yup.object().shape({
     email:yup.string().email("must be a valid email address").required(),
     password:yup.string().required('password is required').min(5,'password should be at least 5 characters long'),
})

export default LoginSchema
