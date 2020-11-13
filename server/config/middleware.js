module.exports = {
  timeout: 100,
  load: {
    before: [
      "boom",
      "sentry",
      "responseTime",
      "logger",
      "cors",
      "responses",
      "gzip"
    ],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order"
    ],
    after: [
      "parser",
      "router",
      "serve-react"
    ]
  }
}