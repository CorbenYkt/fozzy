import React, { useState, useCallback } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function About() {
    return (
        <Grid container
            spacing={3}>
            <Grid item xs>

            </Grid>
            <Grid item xs={8}>
                <Item><Carousel dynamicHeight={true} showThumbs={false}  infiniteLoop={true} autoPlay={true} stopOnHover={true}>
                    <div>
                        <img src={require('./photo/4.jpg')} />
                        <p className="legend">This is my Family, - Tanya, Gosha (Bro), and Dima</p>
                    </div>
                    <div>
                        <img src={require('./photo/2.jpg')} />
                        <p className="legend">Gosha, is in 6th grade of school and he, like me, likes nature</p>
                    </div>
                    <div>
                        <img src={require('./photo/3.jpg')} />
                        <p className="legend">And also Mom and Dad</p>
                    </div>
                    <div>
                        <img src={require('./photo/5.jpg')} />
                        <p className="legend">Me and my Jedy's cloak</p>
                    </div>
                    <div>
                        <img src={require('./photo/6.jpg')} />
                        <p className="legend">Me and my Bro Gosha</p>
                    </div>
                    <div>
                        <img src={require('./photo/4.jpg')} />
                        <p className="legend">Walking around</p>
                    </div>

                </Carousel>
                </Item>
            </Grid>
            <Grid item xs>

            </Grid>
        </Grid>


    );
}

