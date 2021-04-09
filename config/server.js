// config/server.js
// This config is used both in `strapi build` and `strapi start`.
// So if we have a path prefix to the api, such as /dev or /v1,
// we need to use env variables to configure, as Strapi doesn't
// support path prefixes automagically.
module.exports = ({ env }) => {
  let url = "https://b7j8wdtnt4.execute-api.us-east-1.amazonaws.com/dev";
  // Check if running in serverless-offline
  if (env("IS_OFFLINE", null) === "true") {
    url = "http://localhost:3000/dev";
  }
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 3000),
    url,
    admin: {
      //serveAdminPanel: false, // No admin panel
      //autoOpen: false,
      url: "/",
      auth: {
        secret: env("ADMIN_JWT_SECRET", "22fa173e49f3dcd68c5e91eca6395a61"),
      },
    },
  };
};
