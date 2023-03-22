export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    const hash = location.hash
    if (!hash) { return }
    window.scrollTo(0, 0)
  })
})
