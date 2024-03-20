import { Rubik } from 'next/font/google';
import Header from '@components/Header';
import Hero from '@components/Hero';
import { HeroData } from '@/typings';
import { GetStaticProps } from 'next';
import { fetchHeroData } from '@utils/fetchHero';

const inter = Rubik({ weight: '400', subsets: ['latin'] });

type Props = {
    heroData: HeroData;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const heroData = await fetchHeroData();

    return {
        props: {
            heroData
        },
        revalidate: 10
    };
};

export default function Home({ heroData }: Props) {
    return (
        <main
            className={`flex h-screen flex-col items-center justify-between bg-hero bg-fixed bg-center bg-cover bg-no-repeat
            text-white ${inter.className}`}
        >
            <Header />
            <Hero data={heroData} />
        </main>
    );
}
