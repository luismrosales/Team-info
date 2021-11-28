const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");
const newEngineer = new Employee("jade", 25, "jade@gmail.com");

test("testing getName()", () => {
  expect(newEngineer.getName()).toBe("jade");
});

test("testing getId()", () => {
  expect(newEngineer.getId()).toBe(25);
});

test("testing getEmail()", () => {
  expect(newEngineer.getEmail()).toBe("jade@gmail.com");
});
