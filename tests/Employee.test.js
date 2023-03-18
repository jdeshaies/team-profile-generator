const Employee = require("../lib/employee.js");

describe("Employee", () => {
  // Test to verify that the Employee class can be instantiated.
  test("Can instantiate Employee instance", () => {
    const employee = new Employee();

    expect(employee).toBeInstanceOf(Employee);
  });

  // Test to verify that name can be assigned.
  test("Can set name via constructor arguments", () => {
    const name = "John Doe";
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
  });

  // Test to verify that ID can be assigned.
  test("Can set ID via constructor arguments", () => {
    const id = 1;
    const employee = new Employee("John Doe", id);

    expect(employee.id).toBe(id);
  });

  // Test to verify that email can be assigned.
  test("Can set email via constructor arguments", () => {
    const email = "sample@email.com";
    const employee = new Employee("John Doe", 1, email);

    expect(employee.email).toBe(email);
  });

  // Test to verify that name can be retrieved via getName().
  test("Can get name via getName()", () => {
    const name = "John Doe";
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
  });

  // Test to verify that id can be retrieved via getId().
  test("Can get ID via getId()", () => {
    const id = 1;
    const employee = new Employee("John Doe", id);

    expect(employee.getId()).toBe(id);
  });

  // Test to verify that email can be retrieved via getEmail().
  test("Can get email via getEmail()", () => {
    const email = "sample@email.com";
    const employee = new Employee("John Doe", 1, email);

    expect(employee.getEmail()).toBe(email);
  });

  // Test to verify that getRole() returns "Employee"
  test("getRole() should return 'Employee'", () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe("Employee");
  });
});
