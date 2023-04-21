import { get as _get } from 'lodash-es'

export default defineEventHandler(async (event) => {
  const path = _get(event, 'context.params._', '')
  const proto = _get(event, 'context.params.proto', '')
  const location = `${proto}://${path}`

  if (!isValidUrl(location)) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Invalid URL format provided',
    })
  }

  if (path && path.length > 0) {
    return sendRedirect(event, location, 302)
  }
  else {
    throw createError({
      statusCode: 503,
      statusMessage: 'No location provided',
    })
  }
})
