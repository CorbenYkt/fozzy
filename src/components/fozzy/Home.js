import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home() {
   return (
      <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'Fozzy'} style={{ background: info.gradient }}
            component={'img'} src={me}
            width={{ xs: '35vh', md: '40vh' }}
            height={{ xs: '35vh', md: '40vh' }}
            borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
         <Box fontSize={'1rem'} maxHeight={'calc(100vh - 175px)'} width={{ xs: '80%', md: '60%' }} >
            <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🐾</span>
            </h1>
            <p>I'm {info.about}.</p>
            <p>{info.bio}</p><br></br>
            <p>Sept. 2023. I arrived in the city of Almaty, this is in Kazakhstan. There is delicious meat and beautiful mountains.</p>
            <p>Dec. 2023. I arrived in the city of Seoul in South Korea. I miss my family too much.</p>
            <br></br>
            <a href='https://corbenykt.github.io/'>Btw, please visit my family's page.</a>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}