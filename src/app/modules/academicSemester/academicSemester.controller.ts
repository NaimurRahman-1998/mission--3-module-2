/* eslint-disable @typescript-eslint/no-explicit-any */

import catchAsync from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.services";



const createAcademicSemester = catchAsync(async (req,res) => {
  
      const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body);

      res.status(200).json({
        success: true,
        message: 'Semester created succesfully',
        data: result,
      });

});

export const AcademicSemesterControllers = {
    createAcademicSemester,
}