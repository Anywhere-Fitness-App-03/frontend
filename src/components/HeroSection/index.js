import React from 'react';
import Video from '../../videos/video.mp4'
import {Link} from "react-router-dom";
import {HeroContainer,VideoBg,HeroBg} from './HeroElements'
const HeroSection = () => {

    return(
        <>
        <HeroContainer id={'home'}>
            <HeroBg>
        
           
                <VideoBg autoPlay loop muted src={Video} type={'video/mp4'}/>
                
              
    
            </HeroBg>

            <div className="contentUndervid" >

<h1 className="heroh1">Ready to Join?</h1>

<Link to="/account">
<button   >Create Account</button>
</Link>
</div>
        </HeroContainer>

        </>
    )
}

export default  HeroSection