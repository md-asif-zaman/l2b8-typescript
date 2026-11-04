const wrapInArray = <T>(value: T): T[] => {
  return [value];
};

const stringArray = wrapInArray<string>("Appsd");
const numberArray = wrapInArray<number>(1234);

interface User {
  name: string;
  role: string;
}

interface Blog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type UserResponse = ApiResponse<User>;

const userRes: UserResponse = {
  statusCode: 200,
  success: true,
  data: {
    name: "Asif",
    role: "Admin",
  },
};

const blogRes: ApiResponse<Blog> = {
  statusCode: 200,
  success: true,
  data: {
    date: "12-12-2021",
    description: "sdfdaf",
    title: "sfsdfaf",
  },
};
