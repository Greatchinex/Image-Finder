import React, { Component } from 'react'
import ImageResults from './ImageResults';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

class Search extends Component {

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
        const val = e.target.value

        this.setState({
            [e.target.name]: val
        }, () => {
            // Check if input field is empty
            if(val === "") {
                this.setState({
                    images: []
                })
            } else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`) // &safesearch: so that only appropriate images for all ages will be shown
                .then(
                    res => this.setState({images: res.data.hits})
                )
                .catch(err => console.log(err));
            }         
    });
    }

    changeAmount = (e, index, value) => {
       this.setState({
            amount: value
       })
    }
    
    render() {
        console.log(this.state.images);
        return (
            <div>
                <TextField 
                    name="searchText" 
                    value={this.state.searchText} 
                    onChange={this.changeText}
                    floatingLabelText="Search Images"
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
                <br />

                {/* Conditional Rendering: To only render component if there is an image in the array */}
                {this.state.images.length > 0 ? <ImageResults image={this.state.images} /> : null }
            </div>
        )
    }
}

export default Search
