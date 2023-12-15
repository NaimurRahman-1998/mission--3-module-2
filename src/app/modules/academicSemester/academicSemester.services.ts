import { AcademicSemester } from "./academicSemester.model";
import { TAcademicSemester } from "./academicSemestert.interface";

const createAcademicSemesterIntoDB = (payload : TAcademicSemester) =>{
    const result = AcademicSemester.create(payload);
    return result;
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB
}