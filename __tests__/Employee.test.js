const Employee = require("../lib/Employee");
const newEmployee = new Employee("john", 20, "john@gmail.com");

test("testing getName()", () => {
  expect(newEmployee.getName()).toBe("john");
});

test("testing getId()", () => {
  expect(newEmployee.getId()).toBe(20);
});

test("testing getEmail()", () => {
  expect(newEmployee.getEmail()).toBe("john@gmail.com");
});
