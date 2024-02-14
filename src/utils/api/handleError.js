// was built with help from:
// https://developer.themoviedb.org/docs/errors
// the template is from: https://github.com/infinitered

export function getGeneralApiProblem(response) {
  switch (response.problem) {
    case 'CONNECTION_ERROR':
      return {kind: 'cannot-connect', temporary: true};
    case 'NETWORK_ERROR':
      return {kind: 'cannot-connect', temporary: true};
    case 'TIMEOUT_ERROR':
      return {kind: 'timeout', temporary: true};
    case 'SERVER_ERROR':
      return {kind: 'server'};
    case 'UNKNOWN_ERROR':
      return {kind: 'unknown', temporary: true};
    case 'CLIENT_ERROR':
      switch (response.status) {
        case 200:
          return {kind: 'success'};
        case 201:
          return {kind: 'updated-successfully'};
        case 400:
          return handleBadRequest(response); // Handle various 400 errors
        case 401:
          return handleUnauthorized(response); // Handle various 401 errors
        case 403:
          return {kind: 'forbidden'};
        case 404:
          return {kind: 'not-found'};
        case 405:
          return {kind: 'method-not-allowed'};
        case 422:
          return {kind: 'invalid-parameters'};
        case 429:
          return {kind: 'rate-limit-exceeded'};
        case 500:
          return {kind: 'internal-server-error'};
        case 501:
          return {kind: 'invalid-service'};
        case 503:
          return {kind: 'service-offline'};
        case 504:
          return {kind: 'gateway-timeout'};
        default:
          return {kind: 'rejected'};
      }
    case 'CANCEL_ERROR':
      return null;
  }

  return null;
}

function handleBadRequest(response) {
  // Example of handling different types of BadRequest errors
  // You might need to inspect `response.data` or `response.error` to differentiate them
  // This is a placeholder function, adjust according to your error response structure
  switch (response.error) {
    case 'Invalid page':
      return {kind: 'invalid-page'};
    case 'Invalid date':
      return {kind: 'invalid-date'};
    case 'Invalid timezone':
      return {kind: 'invalid-timezone'};
    // Add more cases as needed
    default:
      return {kind: 'bad-request', message: response.error};
  }
}

function handleUnauthorized(response) {
  // Handle various 401 Unauthorized errors
  // Adjust according to your specific error messages or codes
  switch (response.error) {
    case 'Authentication failed':
      return {kind: 'authentication-failed'};
    case 'Invalid API key':
      return {kind: 'invalid-api-key'};
    case 'Suspended API key':
      return {kind: 'api-key-suspended'};
    // Add more cases as needed
    default:
      return {kind: 'unauthorized', message: response.error};
  }
}
