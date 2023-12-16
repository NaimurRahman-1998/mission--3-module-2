import { AcademicSemesterCodeName } from "./academicSemester.constants";
import { AcademicSemester } from "./academicSemester.model";
import { TAcademicSemester } from "./academicSemestert.interface";

const createAcademicSemesterIntoDB = (payload : TAcademicSemester) =>{
    if(AcademicSemesterCodeName[payload.name] !== payload.code){
        throw new Error("Code Does Not match")
    }
    const result = AcademicSemester.create(payload);
    return result;
}

const getAllAcademicSemestersFromDB = async () => {
    const result = await AcademicSemester.find();
    return result;
  };

  const getSingleAcademicSemesterFromDB = async (id: string) => {
    const result = await AcademicSemester.findById(id);
    return result;
  };

  const updateAcademicSemesterIntoDB = async (
    id: string,
    payload: Partial<TAcademicSemester>,
  ) => {
    if (
      payload.name &&
      payload.code &&
      AcademicSemesterCodeName[payload.name] !== payload.code
    ) {
      throw new Error('Invalid Semester Code');
    }
  
    const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  };

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterIntoDB
    
}