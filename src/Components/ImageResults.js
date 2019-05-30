import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageResults extends Component {

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
                                <IconButton>
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

        return (
            <div>
                {imageList}
            </div>
        )
    }
}

export default ImageResults
