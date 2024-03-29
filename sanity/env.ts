export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-17';

export const dataset = assertValue(
    process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
    'Missing environment variable: DATASET'
);

export const projectId = assertValue(
    process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
    'Missing environment variable: PROJECT_ID'
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage);
    }

    return v;
}
