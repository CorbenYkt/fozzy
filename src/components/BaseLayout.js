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
      <Box className={Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh-175px'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route index path={'fozzy'} element={<Home />} />
                  <Route exact path={'myfamily'} element={<Myfamily />} />
                  <Route path="*" element={<PageNotFound />} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  <p>Based on template of <a href={'https://github.com/paytonjewell/ReactPortfolioTemplate'}>Payton Pierce</a></p>
                  <p>&copy; 2022</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}