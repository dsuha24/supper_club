module.exports = strapi => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        try {
          await next();
        } catch (error) {
          console.log(error)
          let message = { error };

          // MongoError
          if (error.code === 11000) {
            const { keyValue } = error;
            // keyValue: { slug: 'abc' }
            message = `${strapi.services.utils.capitalizeFirstLetter(Object.keys(keyValue)[0])} ${Object.values(keyValue)[0]} is already taken.`
          }

          // Boom error object
          if (error.isBoom) {
            if (error.data) {
              const { errors } = error.data
              message = `${strapi.services.utils.capitalizeFirstLetter(Object.values(errors)[0][0])}`
            } else {
              message = error.message
            }
          }

          // Invalid ObjectId
          if (error.kind === 'ObjectId') {
            const { value } = error
            message = `Id ${value} is invalid!`
          }

          // throw error
          return ctx.badRequest(message);
        }
      });
    },
  };
};