export declare namespace DiplomaTypes {
  export interface Button {
    text: string;
    url: string;
  }

  export interface Metadata {
    title: string;
    subtitle?: string;
    info?: string;
    button?: Button;
  }

  export interface Section {
    title: string;
    url: string;
    progress: {
      completed: number;
      total: number;
    };
  }

  export interface Course {
    courseName: string;
    sections: Section[];
    isOptional?: boolean;
  }

  export interface Semester {
    name: string;
    dates: {
      start: string;
      end: string;
    };
    courses: Course[];
  }

  export interface Curriculum {
    metadata: Metadata;
    semesters: Semester[];
  }
}
