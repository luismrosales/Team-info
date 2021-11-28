const Employee = require("../lib/Employee");
const newManager = new Employee("steve", 15, "steve@gmail.com");

test("testing getName()", () => {
  expect(newManager.getName()).toBe("steve");
});

test("testing getId()", () => {
  expect(newManager.getId()).toBe(15);
});

test("testing getEmail()", () => {
  expect(newManager.getEmail()).toBe("steve@gmail.com");
});
