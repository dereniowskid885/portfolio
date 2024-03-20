import { HeroData } from '@/typings';
import Image from 'next/image';
import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { urlFor, getUrlFromId } from '@/sanity/lib/utils';
import { motion } from 'framer-motion';
import DownloadIcon from './DownloadIcon';

type Props = {
    data: HeroData;
};

export default function Hero({ data }: Props) {
    const cvUrl = getUrlFromId(data?.cv.asset?._ref);
    const [text] = useTypewriter({
        words: ['Software Engineer', 'Front-end Developer', 'IT Engineer'],
        loop: true,
        delaySpeed: 1500
    });

    return (
        <section id="hero" className="h-screen w-screen">
            <div className="flex justify-evenly items-center py-16">
                <div className="flex flex-col items-center color-white space-y-5">
                    <p className="text-3xl">Hello! I&apos;m</p>
                    <h1 className="text-5xl font-bold">{data?.name}</h1>
                    <p className="text-xl text-primary-red min-h-[28px] uppercase tracking-widest">
                        {text}
                    </p>
                    <div className="flex space-x-4">
                        <motion.a
                            href={cvUrl}
                            target="_blank"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="btn btn--download"
                        >
                            <DownloadIcon />
                            Download CV
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="btn"
                        >
                            Contact me
                        </motion.button>
                    </div>
                </div>
                <motion.div
                    initial={{
                        opacity: 0.8
                    }}
                    whileHover={{
                        opacity: 1,
                        scale: 1.1
                    }}
                    className="relative lg:w-60 lg:h-64 w-44 h-48"
                >
                    <Image
                        src={urlFor(data?.profilePicture).url()}
                        alt="profile picture"
                        fill
                        priority
                        className="rounded-3xl"
                    />
                </motion.div>
            </div>
        </section>
    );
}
