import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterControllers } from './academicSemester.controller';
import { academicSemesterValidationSchema } from './academicSemester.validation';

const router = express.Router();

router.post('/create-academicSemester', validateRequest(academicSemesterValidationSchema), AcademicSemesterControllers.createAcademicSemester);

export const AcademicSemesterRoutes = router;
