import React from 'react';
import Navbar  from '../components/Navbar';
import Card from '../components/Card';
import CarouselItem from '../components/CarouselItem';
import Carousel from '../components/Carousel';

class CardNew extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </React.Fragment>
        )
    }
}

export default CardNew;