import React from 'react';
import CreateForm from '../components/CreateForm';
import NavDetails from '../components/NavDetails'
import Card from '../components/Card'
import './CreateCard.css'


class CreateCard extends React.Component{
    render(){
        return (
            <React.Fragment>
                <NavDetails/>
                
                <div className="container">
                    <Card/>
                    <CreateForm/>

                </div>            
            </React.Fragment>
        )
    }
}

export default CreateCard;