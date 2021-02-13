module.exports = {
  publicPath: process.env.NODE_ENV === "production"? "/imperial-assault/": "/",
  transpileDependencies: [
    'vuetify'
  ]
}
