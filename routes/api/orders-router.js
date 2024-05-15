import express from "express";
import ordersControllers from "../../controllers/orders-controllers.js";

import contactsSchemas from "../../schemas/contacts-schemas.js";

import validate from "../../decorators/validateBody.js";

const ordersRouter = express.Router();

ordersRouter.get("/", ordersControllers.getAll);

// ordersRouter.get("/:contactId", ordersControllers.getById);

// ordersRouter.post(
//   "/",
//   validate.validateBody(contactsSchemas.contactAddSchema),
//   ordersControllers.postNewContact
// );

// ordersRouter.put(
//   "/:contactId",
//   validate.validateBody(contactsSchemas.contactAddSchema),
//   ordersControllers.updateById
// );

// ordersRouter.delete("/:contactId", ordersControllers.deleteById);

export default ordersRouter;
