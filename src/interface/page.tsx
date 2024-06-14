export interface CourseData {
  _id: string;
  academic_year: string;
  degree: string;
  department: string;
  name: string;
  class_code: string;
  instructor: string;
  course_code: string;
  semester: string;
  english: boolean;
  approval?: boolean;
  transcript_id?: string;
}
