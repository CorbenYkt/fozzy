import React, { useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from './fozzy/Home';
import Myfamily from "./myfamily/About";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
   return (
      <Box className={Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route index path={'fozzy'} element={<Home />} />
                  <Route exact path={'myfamily'} element={<Myfamily />} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  <p>Artemyev's Family &hearts; by <a href={'https://github.com/CorbenYkt'}>Dmitriy Artemyev</a></p>
                  <p>&copy; 2022</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}