type TId = number;
type TRole = "admin" | "user";

interface IUser {
  name: string;
  id: TId;
  role: TRole;
}

const user: IUser = {
  name: "Asif",
  id: 12,
  role: "user",
};
