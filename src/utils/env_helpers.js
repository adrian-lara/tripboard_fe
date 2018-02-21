function beRoot() {
  if (process.env.IN_CLUSTER) {
    return "http://192.168.99.100"
  } else if (process.env.NODE_ENV === 'development') {
    return "http://localhost"
  }
}

function bePort() {
  if (process.env.IN_CLUSTER) {
    return "30003"
  } else if (process.env.NODE_ENV === 'development') {
    return "8080"
  }
}

module.exports = {
  beRoot,
  bePort,
}
