// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "TrendyTreehugger",
      meta: [
        { name: "desscription", content: "รายละเอียดเว็บไซต์" }
      ]
    }
  }



})

modules: [
  '@nuxtjs/axios',
  '@nuxtjs/auth-next'
]
