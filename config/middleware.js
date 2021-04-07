module.exports = {
  //...
  settings: {
    cors: {
      origin: [
        "http://localhost:1347",
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
