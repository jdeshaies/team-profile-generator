const Manager = require("../lib/manager.js");

describe("Manager", () => {
  // Test to verify that name can be assigned.
  test("Can set office number via constructor arguments", () => {
    const officeNumber = 1;
    const manager = new Manager(
      "John Doe",
      1,
      "manager@email.com",
      officeNumber
    );

    expect(manager.officeNumber).toBe(officeNumber);
  });

  // Test to verify that getRole() returns "Manager"
  test("getRole() should return 'Manager'", () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe("Manager");
  });

  // Test to verify that office number can be retrieved via getOfficeNumber().
  test("Can get office number via getOfficeNumber()", () => {
    const officeNumber = 1;
    const manager = new Manager(
      "John Doe",
      1,
      "manager@email.com",
      officeNumber
    );

    expect(manager.getOfficeNumber()).toBe(officeNumber);
  });
});
