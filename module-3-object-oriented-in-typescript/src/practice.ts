type Environment = "development" | "staging" | "production";

type RecordEnv = Record<Environment, string>;

const env: RecordEnv = {
  development: "sd",
  production: "sdsd",
  staging: "sds",
};
