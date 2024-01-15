import React, { useState, useCallback } from "react";
import Lightroom from 'react-lightbox-gallery'
import { Box, Grid } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

var images = [
    {
        original: require('./photo/4.jpg'),
        thumbnail: require('./photo/4l.jpg'),
        description: 'This is my Family, - Tanya, Gosha (Bro), and Dima'
    },
    {
        original: require('./photo/6.jpg'),
        thumbnail: require('./photo/6l.jpg'),
        description: 'Me and my Bro Gosha'
    },
    {
        original: require('./photo/17.jpg'),
        thumbnail: require('./photo/17l.jpg'),
        description: 'My family already in New Zealand'
    },
    {
        original: require('./photo/16.jpg'),
        thumbnail: require('./photo/16l.jpg'),
        description: 'I\'m in South Korea in quarantine before entering New Zealand'
    },
    {
        original: require('./photo/14.jpg'),
        thumbnail: require('./photo/14l.jpg'),
        description: 'My brother and bricks'
    },
    {
        original: require('./photo/13.jpg'),
        thumbnail: require('./photo/13l.jpg'),
        description: 'After visiting Ayusai waterfalls'
    },
    {
        original: require('./photo/15.jpg'),
        thumbnail: require('./photo/15l.jpg'),
        description: 'Mountains... mountains'
    },
    {
        original: require('./photo/12.jpg'),
        thumbnail: require('./photo/12l.jpg'),
        description: 'Road for a walk'
    },
    {
        original: require('./photo/11.jpg'),
        thumbnail: require('./photo/11l.jpg'),
        description: 'Again put a big luminous tree'
    },
    {
        original: require('./photo/10.jpg'),
        thumbnail: require('./photo/10l.jpg'),
        description: 'My usual days in winter'
    },
    {
        original: require('./photo/9.jpg'),
        thumbnail: require('./photo/9l.jpg'),
        description: 'I like to travel'
    },
    {
        original: require('./photo/8.jpg'),
        thumbnail: require('./photo/8l.jpg'),
        description: 'I like to take a nap'
    },
    {
        original: require('./photo/7.jpg'),
        thumbnail: require('./photo/7l.jpg'),
        description: 'Walking around'
    },

    {
        original: require('./photo/5.jpg'),
        thumbnail: require('./photo/5l.jpg'),
        description: 'Me and my Jedy\'s cloak',
    },
    {
        original: require('./photo/3.jpg'),
        thumbnail: require('./photo/3l.jpg'),
        description: 'And also Mom and Dad'
    },
    {
        original: require('./photo/2.jpg'),
        thumbnail: require('./photo/2l.jpg'),
        description: 'Gosha, is in 6th grade of school and he, like me, likes nature'
    }
]

var settings = {
    columnCount: {
        default: 3,
        mobile: 3,
        tab: 4
    },
    mode: 'light'
}

export default function About() {
    const newimages = images.reverse()
    return (
        <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Grid container justifyContent="center">
                <Grid item xs={8}>
                    <br></br>
                    <ImageGallery items={images}
                        showNav={false}
                        useBrowserFullscreen={false}
                        showPlayButton={true}
                        showIndex={true}
                        disableSwipe={false}
                        showThumbnails={false}
                        lazyLoad={true}></ImageGallery>

                </Grid>
            </Grid>
        </Box>
    );
}

