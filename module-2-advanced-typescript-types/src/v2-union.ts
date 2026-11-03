//* Literal Type
type Status = "pending";
const status: Status = "pending";

//* Basic Union
type Identity = string | number;
const id: Identity = "1212";

//* Literal Union
type Role = "user" | "admin" | "manager";

const userRole: Role = "manager";

//* Object Union
type Admin = {
  id: number;
  role: "admin";
  privileges: string[];
};

type Member = {
  id: number;
  role: "member";
  plans: string[];
};

type User = Admin | Member;

const user: User = {
  id: 1,
  role: "member",
  plans: ["C++", "C"],
};
