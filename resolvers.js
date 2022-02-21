const {
  President
} = require("./models/_models");

module.exports = {
  Query: {

    hello: () => 'hello!',
    presidents: () => {

      try {
        return President.find().sort('order');
      } catch (err) {
        return err;
      }
    },

    president: async (_, { order }) => {
      try {
        const result = await President.find({ order: order });
        return result;
      } catch (err) {
        return err;
      }
    }
  },

  Mutation: {
    createPresident: async (_, { name, order, termStart, termEnd }) => {
      const pres = new President({ name, order, termStart, termEnd });
      await pres.save();
      return pres;
    }
  }

}
