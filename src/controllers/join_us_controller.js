const db = require("../models/apex_schema");

const join_us_controller = async (req, res) => {
  try {
    let data = req.body;
    if (data) {
      console.log(data);
      let saved_data = await db.create(data);
      saved_data.save();

      let res_data = {
        success: true,
        message: "submited",
      };
      res.status(201).send(res_data);
    } else {
      let res_data={
        success: false,
        message: "invalid data",
      };
      res.status(400).send(res_data);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = join_us_controller;
