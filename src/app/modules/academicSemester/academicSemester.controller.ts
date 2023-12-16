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

const getAllAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();

  res.status(200).json({
    success: true,
    message: 'Academic semesters are retrieved successfully',
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);

    res.status(200).json({
      success: true,
      message: 'Academic semester are retrieved successfully',
      data: result,
    });
})
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'Academic semester are updated successfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemesters,
    getSingleAcademicSemester,
    updateAcademicSemester
}