import React from 'react';
// import { useHistory } from 'react-router-dom'
import {Button} from "./Componet-style";
import {Link} from "react-router-dom";
import HeroSection from './HeroSection/index';

const Home = (props) => {
    console.log('home', props)
    return (

        <HeroSection/>

    )

}
export default Home