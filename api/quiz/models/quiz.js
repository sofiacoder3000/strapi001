"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
const index = "quiz";
module.exports = {
  lifecycles: {
    beforeCreate(data) {
      data.published_at = null;
    },
    afterCreate: async (result, data) => {
      console.log("afterCreate");
      console.log(result);
      console.log(data);
      strapi.services.algolia.saveObject(data, index);
    },

    afterUpdate: async (result, params, data) => {
      console.log("afterUpdate");
      if (result.published_at) {
        strapi.services.algolia.saveObject(result, index);
      } else {
        strapi.services.algolia.deleteObject(result.id, index);
      }
    },

    afterDelete: async (result, params) => {
      console.log("afterDelete");
      strapi.services.algolia.deleteObject(result.id, index);
    },
  },
};
