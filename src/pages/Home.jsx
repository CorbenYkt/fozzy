import Header from './Header';
import Footer from './Footer';
import { info } from "./Info";
import me from '../img/self.png';
import { Box } from "@mui/material";
import Style from './Home.module.scss';
import Gallery from './Gallery';

function Home() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header />

            <main class="flex-grow">
                <div className="max-w-6xl mx-auto px-4">
                    <div id="mesection" className="grid gap-20">
                        <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
                            justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>

                            <Box component={'main'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
                                justifyContent={'center'}>
                                <Box className={Style.shadowed} alt={'Fozzy'} style={{ background: info.gradient }}
                                    component={'img'} src={me}
                                    width={{ xs: '35vh', md: '40vh' }}
                                    height={{ xs: '35vh', md: '40vh' }}
                                    borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
                            </Box>


                            <Box fontSize={'1rem'} maxHeight={'calc(100vh - 150px)'}>
                                <h1 className="h3 mb-3 text-black">Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🐾</span>
                                </h1>
                                <p className="text-m text-gray-500">I'm {info.about}.</p>
                                <p className="text-m text-gray-500">{info.bio}</p><br></br>
                                <p className="text-m text-gray-500">Sept. 2023. I arrived in the city of Almaty, this is in Kazakhstan. There is delicious meat and beautiful mountains.</p>
                                <p className="text-m text-gray-500">Dec. 2023. I arrived in the city of Seoul in South Korea. I miss my family too much.</p>
                                <p className="text-m text-gray-500">June. 2024. When will they put me on a plane and fly to my family?</p>
                                <p className="text-m text-gray-500">5th of July. 2024. I'm in Auckland Quarantine Center</p>
                                <p className="text-m text-gray-500">15th of July. 2024. Hurray! They collected me from Auckland</p>
                                <br></br>
                                <p className="text-m text-gray-500">Btw, please visit my <a className="text-m text-gray-500" href='https://corbenykt.github.io/'><b>Father's page.</b></a> He is a Frontend developer and needs some job.</p>
                                <Box component={'ul'} p={'0.8rem'}>
                                    {info.miniBio.map((bio, index) => (
                                        <p className="text-m text-gray-500">{bio.emoji}&nbsp;{bio.text}</p>
                                    ))}
                                </Box>
                            </Box>
                        </Box>


                    </div>
                </div >
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    <div id="myfamilysection" className="grid gap-20">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
                            <h2 className="h3 mb-3 text-black">My Family</h2>

                            <Gallery></Gallery>
                        </div>

                    </div>
                </div>

            </main >

            <Footer />
        </div >
    );
}

export default Home;