import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageResults extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            open: false,
            currentImg: ""
        }
    }

    handleOpen = (img) => {
        this.setState({
            open: true,
            currentImg: img
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
    

    render() {

        let imageList;
        const { image } = this.props
        if(image) {
            imageList = (
                <GridList cols={3}>
                    {image.map(img => (
                        <GridTile 
                            title={img.tags}
                            key={img.id}
                            subtitle={
                                <span> By {img.user} </span>
                            }
                            actionIcon={
                                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                    <ZoomIn color="white" />
                                </IconButton>
                            }
                        >
                            <img src={img.largeImageURL} alt="" />
                        </GridTile>
                    ))}   
                </GridList>
            )
        } else {
            imageList = null;
        }

        const actions = [
            <FlatButton  label="close" primary={true} onClick={this.handleClose} />
        ]

        return (
            <div>
                {imageList}
                <Dialog
                    actions={actions} 
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <img src={this.state.currentImg} alt="" style={{width: "100%"}} />
                </Dialog>
            </div>
        )
    }
}

export default ImageResults
