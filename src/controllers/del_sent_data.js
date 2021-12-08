const db = require("../models/apex_schema");

const del_sent_data = async (req, res) => {
  try {
    console.log("Del Sent Data Called");
    let all_data = await db.find();

    all_data.map(async (d) => {
      if (d.send === true) {
        await db.deleteOne({ _id: d._id });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = del_sent_data;
