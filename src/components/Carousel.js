import React from 'react';

import Card from './Card';
import bigpic from '../images/bigpic.png';
import dayplanner from '../images/dayplanner.png';
import weatherdashboard from '../images/weatherdashboard.png';
import { Container, Row } from 'react-bootstrap';


class Carousel extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                items: [
                
                {
                    id: 0,
                    title: 'Texas Parks Refactor',
                    subTitle: 'A fun reimagination of the Texas National Parks',
                    imgSrc: bigpic,
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Day Planner',
                    subTitle: 'A Day Planner',
                    imgSrc: dayplanner,
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Weather Dashboard',
                    subTitle: 'A Weather Dash',
                    imgSrc: weatherdashboard,
                    link: 'https://facebook.com',
                    selected: false
                },
               
            ]
        }
    }


    handleCardClick = (id, card) => {

        console.log(id);


        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

        render() {
            return(
               <Container fluid={true}>
                   <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                   </Row>

               </Container> 
            );
        }

}



export default Carousel;