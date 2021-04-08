// import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

// Todo UseCase deverá ter apenas um Controller
class ImportCategoryUseCase {
  execute(file: any) {
    console.log("====================================");
    console.log("file =>", file);
    console.log("====================================");
    // const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    // if (categoryAlreadyExists) {
    //   throw new Error("Category Already Exists");
    // }

    // this.categoriesRepository.create({ name, description });
  }
}

export { ImportCategoryUseCase };
