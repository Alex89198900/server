const { Brand } = require("../models/models");
//const ApiError = require('../error/ApiError');
import { Request, Response, NextFunction } from "express";
class BrandController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req: Request, res: Response) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }

  async updateOne(req: any, res: any) {
    let { id } = req.params;
    const { name } = req.body;

    const brand = await Brand.findOne({
      where: { id },
    });
    brand.name = name;
    brand.save();
    return res.json("brand updated");
  }

  async deleteBrand(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    await Brand.destroy({ where: { id } });

    return res.json("DELETED");
  }
}

module.exports = new BrandController();

