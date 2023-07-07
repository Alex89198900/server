// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";
import path from "path";
const { Device, DeviceInfo } = require("../models/models");
const ApiError2 = require("../error/ApiError");
import { Request, Response, NextFunction } from "express";
class DeviceController {
  async create(req: any, res: any, next: any) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuidv4() + ".jpg";
      console.log(fileName);
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      if (info) {
        info = JSON.parse(info);
        info.forEach((i: any) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }
      return res.json(device);
    } catch (e: any) {
      next(ApiError2.badRequest(e.message));
    }
  }

  async getAll(req: any, res: any, next: any) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId, brandId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }

  async getOne(req: any, res: any) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
  async deleteType(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    await Device.destroy({ where: { id } });

    return res.json("DELETED");
  }
}

module.exports = new DeviceController();

