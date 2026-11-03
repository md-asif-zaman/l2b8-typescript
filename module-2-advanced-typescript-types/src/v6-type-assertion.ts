//* Type Assertion
//* as syntax

type Status = "pending" | "approved" | "rejected";

const someStatus: string = "pending";

const showStatus = (status: Status) => {
  console.log("Your current application status is " + status);
};
showStatus(someStatus as Status);

//* non-null assertion
interface Config {
  port?: number;
}

const config: Config = {
  port: 5500,
};

const currentPort: number = config.port!;

//* Constant assertion
const configuration = {
  port: 8080,
  prefix: "/api/v1",
} as const;
