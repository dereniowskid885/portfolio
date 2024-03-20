import { type SchemaTypeDefinition } from 'sanity';

import hero from './schemaTypes/hero';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [hero]
};
