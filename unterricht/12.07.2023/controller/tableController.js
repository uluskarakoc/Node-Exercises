import { TableModel } from "../models/Table.js";

// export const getTables = async (req, res) => {
//     try {
//         const tables = await TableModel.find();
//         res.send(tables);
//     } catch (error) {
//         console.error(error);
//     }

// }

export const getTables = async (req, res) => {
  try {
    const tables = await TableModel.find().populate("orders").select("id");
    res.send(tables);
  } catch (error) {
    console.error(error);
  }
};

export const createTable = async (req, res) => {
  const tableData = req.body;
  const table = new TableModel(tableData);
  try {
    await table.save();
    res.send("table gespeichert");
  } catch (error) {
    console.error(error);
  }
};

export const updateTable = async (req, res) => {
  const tableId = req.params.id;
  try {
    const updateTable = await TableModel.findByIdAndUpdate(tableId, req.body, {
      new: true,
    });
    res.json(updateTable);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTable = async (req, res) => {
  const tableId = req.params.id;
  try {
    const deleteTable = await TableModel.findByIdAndDelete(tableId, req.body);
    res.send("table deleted");
  } catch (error) {
    console.error(error);
  }
};
