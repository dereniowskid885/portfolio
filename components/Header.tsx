import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
    const [mailHovered, setMailHovered] = useState(false);

    return (
        <header className="relative my-6 mx-auto">
            <div className="anim-border rounded-full px-8 py-4">
                <ul
                    className="flex items-center justify-center space-x-4 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2
                        -translate-y-1/2"
                >
                    <motion.li
                        initial={{
                            opacity: 0.8
                        }}
                        whileHover={{
                            opacity: 1,
                            scale: 1.1
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <SocialIcon
                            url={'https://github.com/dereniowskid885'}
                            title={'GitHub'}
                            fgColor="white"
                            bgColor="transparent"
                        />
                    </motion.li>
                    <motion.li
                        initial={{
                            opacity: 0.8
                        }}
                        whileHover={{
                            opacity: 1,
                            scale: 1.1
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <SocialIcon
                            url={'https://www.linkedin.com/in/daniel-dereniowski'}
                            title={'LinkedIn'}
                            fgColor="white"
                            bgColor="transparent"
                        />
                    </motion.li>
                    <motion.li
                        initial={{
                            opacity: 0.8
                        }}
                        whileHover={{
                            opacity: 1,
                            scale: 1.1
                        }}
                        whileTap={{ scale: 0.9 }}
                        onHoverStart={() => setMailHovered(true)}
                        onHoverEnd={() => setMailHovered(false)}
                    >
                        <SocialIcon
                            url={'mailto:dereniowskid885@gmail.com'}
                            title={'Mail'}
                            fgColor="white"
                            bgColor="transparent"
                        />
                    </motion.li>
                </ul>
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -48,
                    x: 48
                }}
                animate={{
                    opacity: mailHovered ? 1 : 0,
                    y: mailHovered ? 0 : -48,
                    x: mailHovered ? 0 : 48
                }}
                className="absolute -bottom-[64px] text-center w-full flex flex-col"
            >
                <span className="text-primary-red font-bold">Reach me out!</span>
                dereniowskid885@gmail.com
            </motion.div>
        </header>
    );
}
