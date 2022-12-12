import React, { useState, useCallback } from "react";
import Lightroom from 'react-lightbox-gallery'
import { Box, Grid } from "@mui/material";

var images = [
    {
        src: require('./photo/4.jpg'),
        sub: 'This is my Family, - Tanya, Gosha (Bro), and Dima'
    },
    {
        src: require('./photo/3.jpg'),
        sub: 'And also Mom and Dad'
    },
    {
        src: require('./photo/2.jpg'),
        sub: 'Gosha, is in 6th grade of school and he, like me, likes nature'
    },
    {
        src: require('./photo/5.jpg'),
        sub: 'Me and my Jedy\'s cloak',
    },
    {
        src: require('./photo/6.jpg'),
        sub: 'Me and my Bro Gosha'
    },
    {
        src: require('./photo/7.jpg'),
        sub: 'Walking around'
    },
    {
        src: require('./photo/8.jpg'),
        sub: 'I like to take a nap'
    },

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
    return (
        <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Grid container justifyContent="center">
                <Grid item xs={8}>
                    <br></br>
                    <Lightroom images={images} settings={settings} />
                </Grid>
            </Grid>
        </Box>
    );
}

