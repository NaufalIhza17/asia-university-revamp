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
  gpa?: number;
  taken_in?: string;
}

export interface UserData {
  full_name: string;
  email: string;
  _id: string;
  user_id: string;
  is_admin?: boolean;
}

export interface NewsData {
  _id: string;
  title: string;
  content: string;
  navigateTo: string;
}

export interface PaymentData {
  _id: string;
  primary_tuition: number;
  additional_tuition: number;
  scholarship: number;
  status: string;
  user_id: string;
  payment_data?: string;
  username?: string;
}

export interface TranscriptData {
  course_id: string;
  ID: string;
  gpa: number;
  taken_in: string;
}