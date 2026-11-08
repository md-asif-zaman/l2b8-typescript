interface User {
  name: string;
  role: string;
}

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

const userResponse: Response<User> = {
  success: true,
  status: 201,
  data: {
    id: 1,
    age: 21,
    name: "Asif",
  },
};
