import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'profilePicture',
            title: 'ProfilePicture',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'cv',
            title: 'CV',
            type: 'file',
            options: {
                storeOriginalFilename: true
            }
        })
    ]
});
