import React from 'react';
import { Box } from '@mui/material';
import Style from '../Home.module.scss';

const BioSection = () => {
    const gradientStyle = {
        background: 'linear-gradient(135deg, rgba(166,104,255,1) 36%, rgba(52,116,193,1) 63%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <Box>
            <h1 className="h3 mb-3 text-black">
                Hi, I'm{' '}
                <span style={gradientStyle}>
                    Fozzy
                </span>
                <span className={Style.hand}>🐾</span>
            </h1>

            <div className={`text-m text-gray-500 ${Style['text-appear']}`}>
                <section className={`text-m text-gray-500 ${Style['text-appear']}`}>
                    <article>
                        <p>I'm a <strong>West Highland White Terrier</strong>.</p>
                        <p>Yes, I'm a dog 🐶. I live with my family – Tanya, Dmitrii, and Gosha. I enjoy long walks!</p>
                    </article>
                    <article className="mt-4"></article>

                    <article>
                        <h2 className="text-lg font-semibold mb-2">My Journey</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <time dateTime="2023-09">September 2023</time>: I arrived in the city of Almaty, Kazakhstan. Delicious meat and beautiful mountains!
                            </li>
                            <li>
                                <time dateTime="2023-12">December 2023</time>: I arrived in Seoul, South Korea. I miss my family too much.
                            </li>
                            <li>
                                <time dateTime="2024-06">June 2024</time>: When will they put me on a plane and fly me to my family?
                            </li>
                            <li>
                                <time dateTime="2024-07-05">5th of July 2024</time>: I'm in the Auckland Quarantine Center.
                            </li>
                            <li>
                                <time dateTime="2024-07-15">15th of July 2024</time>: Hurray! They collected me from Auckland!
                            </li>
                        </ul>
                    </article>

                    <article className="mt-4"></article>

                    <article>
                        <p>
                            Btw, please visit my&nbsp;
                            <a
                                href="https://corbenykt.github.io/"
                                className="underline hover:text-purple-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>father's page</strong>
                            </a>. He's a Frontend Developer and needs a job!
                        </p>
                    </article>
                </section>

            </div>

            <Box component={'ul'} p={'0.8rem'}>
                <p className="text-m text-gray-500">🥩&nbsp;love fresh meat</p>
                <p className="text-m text-gray-500">🛏️&nbsp;love to lie on master's pillow</p>
                <p className="text-m text-gray-500">🦮&nbsp;love to walk outside</p>
                <p className="text-m text-gray-500">🌏&nbsp;I lived in the coldest place on Earth (Yakutsk city)</p>
            </Box>
        </Box>
    );
};

export default BioSection;
