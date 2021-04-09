module.exports = ({ env }) => {
  return {
    settings: {
      // ...
      algolia: {
        enabled: true,
        applicationId: "T4QNOIQRQ6",
        apiKey: env("ALGOLIA_KEY", "bbabd95307a8078e0fab37ce44a7926c"),
        debug: true, // default: false
        prefix: "sofia", // default: Strapi environment (strapi.config.environment)
        timeout: 3000,
      },
    },
  };
};
