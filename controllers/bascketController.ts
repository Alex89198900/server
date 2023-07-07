const { Basket } = require("../models/models");
//const ApiError = require('../error/ApiError');
import { Request, Response, NextFunction } from "express";
class BasketController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    const basket = await Basket.create({ name });
    return res.json(basket);
  }

  async getAll(req: Request, res: Response) {
    const Baskets = await Basket.findAll();
    return res.json(Baskets);
  }

  async updateOne(req: any, res: any) {
    let { id } = req.params;
    const { count } = req.body;

    const basket = await Basket.findOne({
      where: { id },
    });
    basket.count = count;
    basket.save();
    return res.json("Basket updated");
  }

  async deleteBasket(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    await Basket.destroy({ where: { id } });

    return res.json("DELETED");
  }
}

module.exports = new BasketController();

