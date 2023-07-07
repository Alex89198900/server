const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");
import { Request, Response, NextFunction } from "express";
class TypeController {
  async create(req: any, res: any) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req: any, res: any) {
    const types = await Type.findAll();
    return res.json(types);
  }
  async updateOne(req: any, res: any) {
    let { id } = req.params;
    const { name } = req.body;

    const type = await Type.findOne({
      where: { id },
    });
    type.name = name;
    type.save();
    return res.json("type updated");
  }
  async deleteType(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    await Type.destroy({ where: { id } });

    return res.json("DELETED");
  }
}

module.exports = new TypeController();

