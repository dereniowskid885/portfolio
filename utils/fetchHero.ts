import { client } from '@/sanity/lib/client';
import { HeroData } from '@/typings';
import { groq } from 'next-sanity';

const query = groq`
    *[_type == "hero"][0]
`;

export const fetchHeroData = async () => {
    const data: HeroData = await client.fetch(query);

    return data;
};
