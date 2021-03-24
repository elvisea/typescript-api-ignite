import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export default function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    duration: 10,
    educator: "ELVIS",
    name: "Elvis",
  });

  return response.send();
}
