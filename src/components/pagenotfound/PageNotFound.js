import React from 'react';
import Style from '../myfamily/About.module.scss';
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import classNames from 'classnames';
import PageNotFoundimg from '../../img/pagenotfound.png';

export default function PageNotFound() {
    return (
        <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Box className={classNames(Style.avatar, Style.shadowed)} alt={'Fozzy'} style={{ background: info.gradient }} component={'img'} src={PageNotFoundimg} width={{ xs: '35vh', md: '40vh' }}
                height={{ xs: '35vh', md: '40vh' }}
                borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
            <Box>
                <h1>Oops!</h1><h2>There is no page found</h2>
            </Box>
        </Box>
    )
}