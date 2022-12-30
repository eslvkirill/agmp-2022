interface CourseInfo {
  id: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  authors: AuthorsInfo[];
  isTopRated: boolean;
}

interface AuthorsInfo {
  id: number;
  name: string;
  lastName?: string;
}

interface CoursesPaginateInfo {
  courses: CourseInfo[];
  totalCount: number;
}

interface CoursesSearchData {
  courses: CourseInfo[];
  searchValue: string;
}

export { CourseInfo, AuthorsInfo, CoursesPaginateInfo, CoursesSearchData };
