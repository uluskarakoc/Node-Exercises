import { TableModel } from "../models/table.js";

export const getTables = async (req, res) => {
  try {
    const tables = await TableModel.find();
    res.send(tables);
  } catch (error) {
    console.error(error);
  }
};

export const createTable = async (req, res) => {
  const tableData = req.body; // nereye gönderecegim
  try {
    const table = new TableModel(tableData); // gönderme islemi
    await table.save(); // kaydetme islemi
    res.send("table gespeichert");
  } catch (error) {
    console.log(error.message);
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
