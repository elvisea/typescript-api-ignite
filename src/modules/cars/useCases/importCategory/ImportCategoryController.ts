import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

// Todo UseCase deverá ter apenas um Controller
class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    await this.importCategoryUseCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };
