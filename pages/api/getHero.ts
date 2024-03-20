import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { HeroData } from '@/typings';

const query = groq`
    *[_type == "hero"][0]
`;

type Data = {
    hero: HeroData;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const hero: HeroData = await client.fetch(query);

    res.status(200).json({ hero });
}
