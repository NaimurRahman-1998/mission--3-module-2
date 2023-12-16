import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterControllers } from './academicSemester.controller';
import { academicSemesterValidationSchema, updateAcademicSemesterValidationSchema } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academicSemester',
  validateRequest(academicSemesterValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);
router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(updateAcademicSemesterValidationSchema),
  AcademicSemesterControllers.updateAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);
export const AcademicSemesterRoutes = router;
