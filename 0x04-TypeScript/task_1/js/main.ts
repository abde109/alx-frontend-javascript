interface Teacher {
      readonly firstName: string;
      readonly lastName: string;
      fullTimeEmployee: boolean;
      yearsOfExperience?: number;
      location: string;
      [propName: string]: any;
}

const teacher3: Teacher = {
      firstName: "John",
      lastName: "Doe",
      location: "London",
      fullTimeEmployee: false,
      contract: false,
};

console.log(teacher3);