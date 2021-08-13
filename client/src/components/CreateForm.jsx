import React from 'react';
import './styles/CreateForm.css'
class CreateForm extends React.Component{

    handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value})
    }

    handleClick = e => {
        console.log("button was clicked")
    }


    render(){
        return(
            <React.Fragment>
                <h1>New Pokemon</h1>

                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <label>Pokemon Name</label>
                        <input onChange={this.handleChange} className="FormControl" type="text" name="Name"/>
                        <label> Type 1</label>
                        <input type="text" name="type1" />
                    </div>

                    <button type="button" onClick={this.handleClick}>Save</button>
                </form>
            </React.Fragment>
        )
    }
}

export default CreateForm;