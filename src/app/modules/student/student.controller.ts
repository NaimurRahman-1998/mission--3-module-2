import { RequestHandler } from 'express';
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

const getAllStudents : RequestHandler = async (req,res,next) => {
  try {
    const paginationFields = ['page', 'limit', 'sortBy', 'sortOrder'];

    const queryObj = { ...req.query };
    const paginations = pick(queryObj, paginationFields);
    const filters = pick(queryObj, [
      'searchTerm',
      'id',
      'name',
      'email',
      'year',
    ]);

    const result = await StudentServices.getAllStudentsFromDB(
      filters,
      paginations,
    );

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudent : RequestHandler = async (req,res,next) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudent : RequestHandler = async (req,res,next) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
