type Admin = {
  id: number;
  role: "admin";
  privileges: string[];
};

type User = {
  id: number;
  role: "user";
  plans: string[];
};

const user: User = {
  id: 1,
  role: "user",
  plans: ["sdsd"],
};
