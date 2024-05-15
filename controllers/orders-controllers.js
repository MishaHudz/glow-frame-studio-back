import { HttpError } from "../helpers/index.js";

import Order from "../models/Order.js";

import ctrWrapper from "../decorators/ctrlWrapper.js";

const getAll = async (_, res) => {
  const result = await Order.find();
  res.json(result);
};

// const getById = async (req, res) => {
//   const id = req.params.contactId;
//   const result = await commands.getContactById(id);

//   if (!result) {
//     throw HttpError(404, `Not found`);
//   }

//   res.json(result);
// };

// const deleteById = async (req, res) => {
//   const id = req.params.contactId;
//   const result = await commands.removeContact(id);

//   if (!result) {
//     throw HttpError(404, `Not found`);
//   }

//   res.json({ message: "contact deleted" });
// };

// const updateById = async (req, res) => {
//   const body = req.body;
//   const id = req.params.contactId;
//   const result = await commands.updateContact(id, body);

//   if (!result) {
//     throw HttpError(404, `Not found`);
//   }

//   res.json(result);
// };

// const postNewContact = async (req, res) => {
//   const body = req.body;
//   const result = await commands.addContact(body);
//   res.status(201).json(result);
// };

export default {
  getAll: ctrWrapper(getAll),
  // getById: ctrWrapper(getById),
  // deleteById: ctrWrapper(deleteById),
  // updateById: ctrWrapper(updateById),
  // postNewContact: ctrWrapper(postNewContact),
};
