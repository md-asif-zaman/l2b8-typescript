const wrapInArray = (value) => {
    return [value];
};
const stringArray = wrapInArray("Appsd");
const numberArray = wrapInArray(1234);
const userRes = {
    statusCode: 200,
    success: true,
    data: {
        name: "Asif",
        role: "Admin",
    },
};
const blogRes = {
    statusCode: 200,
    success: true,
    data: {
        date: "12-12-2021",
        description: "sdfdaf",
        title: "sfsdfaf",
    },
};
export {};
