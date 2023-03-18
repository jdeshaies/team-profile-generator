const Intern = require("../lib/intern.js");

describe("Intern", () => {
  // Test to verify that school can be assigned.
  test("Can set school via constructor arguments", () => {
    const school = "Test University";
    const intern = new Intern(
      "Test Intern",
      3,
      "intern@email.com",
      school
    );

    expect(intern.school).toBe(school);
  });

  // Test to verify that getRole() returns "Intern"
  test("getRole() should return 'Manager'", () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe("Intern");
  });

  // Test to verify that school can be retrieved via getSchool().
  test("Can get school via getSchool()", () => {
    const school = "Test University";
    const intern = new Intern(
      "Test Intern",
      3,
      "intern@email.com",
      school
    );

    expect(intern.getSchool()).toBe(school);
  });
});
