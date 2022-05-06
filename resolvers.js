const {
  President, CabinetMember
} = require("./models/_models");

module.exports = {
  Query: {

    presidents: async () => {
      try {
        const result = await President.aggregate([{
          $lookup: {
            from: "cabinet-members",
            localField: "order",
            foreignField: "order",
            as: "cabinet"
          }
        }]).sort('order');
        return result;
      } catch (err) {
        return err;
      }
    },

    president: async (_, { order }) => {
      try {
        const result = await President.aggregate([{
          $lookup: {
            from: "cabinet-members",
            localField: "order",
            foreignField: "order",
            as: "cabinet"
          }
        }]).match({ order });
        return result;
      } catch (err) {
        return err;
      }
    },

    cabinets: async () => {
      try {
        const result = await CabinetMember.find().sort('order');
        return result;
      } catch (err) {
        return err;
      }
    },

    cabinet: async (_, { order }) => {
      try {
        const result = await CabinetMember.find({ order });
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
    },

    deletePresident: async (_, { id }) => {
      const pres = await President.findOneAndDelete({ _id: id });
      return pres;
    }

  }

}
