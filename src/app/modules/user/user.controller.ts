/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import { UserServices } from './user.services';

const createStudent : RequestHandler = async (req,res,next) => {
    try {
        const { password , student: studentData } = req.body;
        // const zodParsedData = studentValidationSchema.parse(studentData);
    
        const result = await UserServices.createStudentIntoDB(password , studentData)
    
        res.status(200).json({
          success: true,
          message: 'Student is created succesfully',
          data: result,
        });
      } catch (err) {
        next(err);
      }
  };

export const UserControllers = {
    createStudent,
}