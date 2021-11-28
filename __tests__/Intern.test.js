const Employee = require("../lib/Employee");
const newIntern = new Employee("elizabeth", 48, "elizabeth@gmail.com");

test("testing getName()", () => {
  expect(newIntern.getName()).toBe("elizabeth");
});

test("testing getId()", () => {
  expect(newIntern.getId()).toBe(48);
});

test("testing getEmail()", () => {
  expect(newIntern.getEmail()).toBe("elizabeth@gmail.com");
});
