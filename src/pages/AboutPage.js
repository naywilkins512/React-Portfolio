import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';


function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Nay Wilkins. I'm a mern stack engineer with experience in React, Express JS, Node JS, SQL, and Mongo, as well as GSAP animation.</p> 
                <p>With a decade of managing, directing, and booking a full-staff music venue and world-touring band under my belt, I have learned to adapt with my constantly changing environment and meet every task with optimism and excitement.</p> 
                <p>I take pride in creating meaningful user experiences, bridging the gap between user and client. </p> 
                <p>At the core of my work is a passion for community and the spirit of collaboration, something that makes me a reliable teammate in any scenario. </p> 
            </Content>
        </div>
    );
}

export default AboutPage;