import csvParse from "csv-parse";
import fs from "fs";

// Todo UseCase deverá ter apenas um Controller
class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    // Cria Stream do arquivo
    const stream = fs.createReadStream(file.path);

    // Responsavel por ler as linhas do arquivo
    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log("line=>", line);
    });
  }
}

export { ImportCategoryUseCase };
