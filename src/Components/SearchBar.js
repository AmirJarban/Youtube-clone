import { Paper, TextField } from "@material-ui/core";
import React from "react";

class Searchbar extends React.Component{
    
    state = { searchTerm : ''}
    
    changeHandler = event => {
        this.setState({searchTerm : event.target.value})
    }
    
    submitHandler = event => {
        
        let { searchTerm } = this.state;
        let { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        
        event.preventDefault()
    }

    render(){
        return(
            <Paper elevation={6} style={{padding : '26px'}}>
                <form onSubmit={this.submitHandler}>
                    <TextField fullWidth label='Search...' onChange={this.changeHandler} />
                </form>
            </Paper>
        )
    }
}

export default Searchbar; 