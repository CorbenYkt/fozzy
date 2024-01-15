import React, { useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from './fozzy/Home';
import Myfamily from "./myfamily/About";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import PageNotFound from './pagenotfound/PageNotFound'

export default function BaseLayout() {
   return (
      <Box>
         <Grid flexDirection={'column'}>
            <Grid item>
               <Navbar />
            </Grid>
            <Grid item>
               <Routes>
                  <Route index path={'fozzy'} element={<Home />} />
                  <Route exact path={'fozzy/myfamily'} element={<Myfamily />} />
                  <Route path="*" element={<PageNotFound />} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'0rem'}><br></br>
                  <p>Based on template of <a href={'https://github.com/paytonjewell/ReactPortfolioTemplate'}>Payton Pierce</a></p>
                  <a href={'https://github.com/corbenykt'} style={{ fontWeight: 'normal', textDecorationLine: '' }} >
                     By Dmitrii Artemev
                  </a>
                  <p style={{ fontSize: '0.75rem' }}>&copy; {(new Date().getFullYear())}</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}