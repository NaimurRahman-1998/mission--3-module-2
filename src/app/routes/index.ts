import { Router } from "express";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
    {
        path : '/users',
        route: UserRoutes
    },
    {
        path : '/academic-semesters',
        route: AcademicSemesterRoutes
    },
    {
        path: '/students',
        route: StudentRoutes,
    }
]

moduleRoutes.forEach(routes => router.use(routes.path , routes.route))

export default router;