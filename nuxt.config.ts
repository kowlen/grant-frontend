export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
    nitro: {
        plugins: ['@/server/db/index.ts']
    },
    runtimeConfig: {
        MONGO_URI: process.env.MONGO_URI
    }
})

//head: {
//         title: 'Молодёж России',
//         meta: [
//             { charset: 'utf-8' },
//             { name: 'viewport', content: 'width=1024, initial-scale=1' },
//             {
//                 hid: 'description',
//                 name: 'description',
//                 content: 'my website description'
//             }
//         ],
//         link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
//     }
