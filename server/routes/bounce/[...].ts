import { get as _get } from 'lodash-es'

export default defineEventHandler(async (event) => {
  const location = _get(event, 'context.params._', '')

  if (!isValidUrl(location)) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Invalid URL format provided',
    })
  }

  if (location && location.length > 0 ) {
    return sendRedirect(event, location, 302)
  }
  else {
    throw createError({
      statusCode: 503,
      statusMessage: 'No location provided',
    })
  }
})
