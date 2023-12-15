/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserServices } from './user.services';

const catchAsync = (fn : RequestHandler) => {
  return(req : Request,res : Response,next : NextFunction)=>{
    Promise.resolve(fn(req,res,next)).catch(err => next(err));
  }
}

const createStudent = catchAsync(async (req,res) => {
      const { password , student: studentData } = req.body;
      // const zodParsedData = studentValidationSchema.parse(studentData);
  
      const result = await UserServices.createStudentIntoDB(password , studentData)
  
      res.status(200).json({
        success: true,
        message: 'Student is created succesfully',
        data: result,
      });

});

export const UserControllers = {
    createStudent,
}