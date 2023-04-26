const mongoose = require("mongoose");
const DDF_balance = require("../model/DDF");

exports.ddf_UpdateBalance = async (req, res, next) => {
  let { name, NewBalance } = req.body;

  request = { name: name, balance: NewBalance };
  ddf = new DDF_balance(request);
  ddf.save();
  //console.log("new balance incomming is ",NewBalance);

  const query = DDF_balance.findOne({ name: "Main Balance" });
  let previous_balance = 0;
  query.exec((err, DDF_balance) => {
    if (err) {
      console.log(err);
      next(err);
    }
    if (!DDF_balance) {
      res.status(404).json({ Message: "Not found" });
    } else {
      previous_balance = DDF_balance.balance;
      console.log("previous balance is ",previous_balance)
    }
  });

  DDF_balance.findOneAndUpdate(
    { name: "Main Balance" },{$inc:{balance : NewBalance}}
  ).exec((err, request) => {
    if (err) {
      res.status(500).json({ error: err });
      //console.log(err)
      next(err);
    } else {
      res.status(200).json({ message: "Successfully Update" });
    }
  });

  //console.log(request);
};

exports.ddf_GetBalance = async (req, res, next) => {
  const query = DDF_balance.findOne({ name: "Main Balance" });

  query.exec((err, DDF_balance) => {
    if (err) {
      console.log(err);
      next(err);
    }
    if (!DDF_balance) {
      res.status(404).json({ Message: "Not found" });
    } else {
      let b = DDF_balance.balance;
      res.status(200).json({ balance: b });
    }
  });
};

// exports.ddf_SourceUpdateBalance = asyc(req,res,next)=>{

// };
