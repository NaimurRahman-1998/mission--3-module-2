/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.services';



const createStudent = catchAsync(async (req,res) => {
      const { password , student: studentData } = req.body;
  
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