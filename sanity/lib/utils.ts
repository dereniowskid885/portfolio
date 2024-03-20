import createImageUrlBuilder from '@sanity/image-url';

import { dataset, projectId } from '../env';

export const urlFor = (source: any) =>
    createImageUrlBuilder({
        projectId: projectId || '',
        dataset: dataset || ''
    }).image(source);

export const getUrlFromId = (ref: string | undefined) => {
    let url = '';

    if (!ref) {
        return url;
    }

    // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
    // We don't need the first part, unless we're using the same function for files and images
    const [_file, id, extension] = ref.split('-');
    url = `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;

    return url;
};
