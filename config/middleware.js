module.exports = {
  //...
  settings: {
    cors: {
      origin: [
        "http://localhost:1347",
        "http://localhost:3000",
        "http://localhost:5000",
        "https://b7j8wdtnt4.execute-api.us-east-1.amazonaws.com/dev",
        "https://mysite.com",
        "https://www.mysite.com",
      ],
    },
  },
  load: {
    before: ["timer", "responseTime", "logger", "cors", "responses"],
    order: [
      "Define the middlewares' load order by putting their name in this array in the right order",
    ],
    after: ["parser", "router"],
  },
};
