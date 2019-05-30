import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

export class Search extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            searchText: "",
            amount: 15,
            apiUrl: "https://pixabay.com/api",
            apiKey: "12637991-b03f1b0043ca2c8cb848511b3",
            images: []
        }
    }

    // OnChange Events
    changeText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeAmount = (e) => {
       
    }
    
    render() {
        return (
            <div>
                <TextField 
                    name="searchText" 
                    value={this.state.searchText} 
                    onChange={this.changeText}
                    floatingLabelText="Serch Images"
                    fullWidth={true}  
                />

                <SelectField 
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.changeAmount}
                >

                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="50" />
                </SelectField>
            </div>
        )
    }
}

export default Search
