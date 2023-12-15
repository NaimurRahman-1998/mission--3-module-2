import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { IUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    
  const userData: Partial<IUser> = {};
  userData.id = "2030100001";
  userData.password = password || (config.default_password as string);
  userData.role = 'Student';
  const newUser = await User.create(userData);
    
  if (Object.keys(newUser).length) {
    console.log('Document created successfully');
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);
    console.log('Document created successfully');
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
