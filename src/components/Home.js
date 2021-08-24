import React from 'react';
// import { useHistory } from 'react-router-dom'
import {Button} from "./Componet-style";
import {Link} from "react-router-dom";


const Home = (props) => {
    // console.log('home', props)
    return (
        <div className={'home-wrapper'}>

            <h1>Ready to Join?</h1>

            <Link to="/account">
                <Button type={'primary'} className={"star-button"} onClick={() => props.history.push('/')}>Create Account</Button>
            </Link>
        </div>

    )

}
export default Home