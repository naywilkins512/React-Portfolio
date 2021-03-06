import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} subSubTitle={props.subSubTitle} />
            <Carousel/>
        </div>
    );
}

export default HomePage;