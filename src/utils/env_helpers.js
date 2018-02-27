function beRoot() {
  if (process.env.REACT_APP_IN_PRODUCTION) {
    return "http://104.197.74.32"
  } else if (process.env.REACT_APP_IN_CLUSTER) {
    return "http://192.168.99.100"
  } else if (process.env.NODE_ENV === 'development') {
    return "http://localhost"
  }
}

function bePort() {
  if (process.env.REACT_APP_IN_PRODUCTION) {
    return "8080"
  } else if (process.env.REACT_APP_IN_CLUSTER) {
    return "30003"
  } else if (process.env.NODE_ENV === 'development') {
    return "8080"
  }
}

module.exports = {
  beRoot,
  bePort,
}
