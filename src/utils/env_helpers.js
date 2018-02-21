function beRoot() {
  if (process.env.NODE_ENV === 'development') {
    return process.env.REACT_APP_BE_ROOT
  } else if (process.env.NODE_ENV === 'kube') {
    return process.env.KUBERNETES_SERVICE_HOST
  }
}

function bePort() {
  if (process.env.NODE_ENV === 'development') {
    return process.env.REACT_APP_BE_PORT
  } else if (process.env.NODE_ENV === 'kube') {
    return 8080
  }
}

module.exports = {
  beRoot,
  bePort,
}
