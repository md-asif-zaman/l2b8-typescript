//* Type Assertion
//* as syntax
const someStatus = "pending";
const showStatus = (status) => {
    console.log("Your current application status is " + status);
};
showStatus(someStatus);
const config = {
    port: 5500,
};
const currentPort = config.port;
//* Constant assertion
const configuration = {
    port: 8080,
    prefix: "/api/v1",
};
export {};
