const loginUser = (...args: [name: string, age: number, isLogin: boolean]) => {
  const [name, age] = args;

  return name + " " + age;
};

console.log(loginUser("Asif", 12, false));
