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
                <Item><Carousel showThumbs={false} dynamicHeight={false} infiniteLoop={true} autoPlay={true} stopOnHover={true}>
                    <div>
                        <img src={require('./photo/1.jpg')} />
                        <p className="legend">This is my Bro, his name is Gosha. He is in 6th grade of school</p>
                    </div>
                    <div>
                        <img src={require('./photo/2.jpg')} />
                        <p className="legend">He, like me, likes nature</p>
                    </div>
                    <div>
                        <img src={require('./photo/3.jpg')} />
                        <p className="legend">And also Mom and Dad</p>
                    </div>
                    <div>
                        <img src={require('./photo/4.jpg')} />
                        <p className="legend">They are all together on one shot</p>
                    </div>

                </Carousel>
                </Item>
            </Grid>
            <Grid item xs>

            </Grid>
        </Grid>


    );
}

