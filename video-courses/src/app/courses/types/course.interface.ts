export interface CourseInfo {
  id: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  authors: AuthorsInfo;
  isTopRated: boolean;
}

interface AuthorsInfo {
  id: number;
  lastName: string;
  name: string;
}
