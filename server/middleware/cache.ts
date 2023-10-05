export default defineEventHandler((event) => {
  const path = getRequestPath(event)
  if (path === '/') {
    setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600')
  }
})
