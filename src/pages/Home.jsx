import Header from '../components/Header';
import Footer from '../components/Footer';
import FozzyPhoto from '../img/self.png';
import BioSection from './home/BioSection';
import FamilySection from './home/FamilySection';
import { Box } from '@mui/material';

function Home() {
    return (
        <div className="flex flex-col min-h-screen" >
            <header role="banner">
                <Header />
            </header>

            <main role="main" className="flex-grow">
                <div className="items-center justify-center h-full p-4">
                    <section className="flex flex-col items-center justify-center gap-4 md:flex-row">
                        <Box
                            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 relative"
                            sx={{
                                position: 'relative',
                                borderRadius: '50%',
                                padding: '12px',
                                background: 'linear-gradient(135deg, rgba(166,104,255,1) 36%, rgba(52,116,193,1) 63%)',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                component="img"
                                src={FozzyPhoto}
                                alt="Fozzy photo"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                }}
                            />
                        </Box>
                        <BioSection />
                    </section>
                    <section>
                        <FamilySection />
                    </section>
                </div>

            </main>

            <footer className="flex-none" role="contentinfo">
                <Footer />
            </footer>
        </div >
    );
}

export default Home;