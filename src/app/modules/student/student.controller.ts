/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';


const pick = <T extends Record<string, unknown>, k extends keyof T>(
  obj: T,
  keys: k[],
): Partial<T> => {
  const finalObj: Partial<T> = {};

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};

export default pick;

const catchAsync = (fn : RequestHandler) => {
  return(req : Request,res : Response,next : NextFunction)=>{
    Promise.resolve(fn(req,res,next)).catch(err => next(err));
  }
}

const getAllStudents = catchAsync(async (req,res,next) => {

    // const paginationFields = ['page', 'limit', 'sortBy', 'sortOrder'];

    // const queryObj = { ...req.query };
    // const paginations = pick(queryObj, paginationFields);
    // const filters = pick(queryObj, [
    //   'searchTerm',
    //   'id',
    //   'name',
    //   'email',
    //   'year',
    // ]);

    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });

})

const getSingleStudent = catchAsync(async (req,res,next) => {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
});

const deleteStudent = catchAsync(async (req,res,next) => {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
