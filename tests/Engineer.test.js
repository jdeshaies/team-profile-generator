const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  // Test to verify that GitHub account can be assigned.
  test("Can set GitHub account via constructor arguments", () => {
    const github = "test123";
    const engineer = new Engineer(
      "Sample Engineer",
      2,
      "engineer@email.com",
      github
    );

    expect(engineer.github).toBe(github);
  });

  // Test to verify that getRole() returns "Engineer"
  test("getRole() should return 'Engineer'", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe("Engineer");
  });

  // Test to verify that GitHub username can be retrieved via getOfficeNumber().
  test("Can get GitHub username via getGithub()", () => {
    const github = "test123";
    const engineer = new Engineer(
      "Sample Engineer",
      2,
      "engineer@email.com",
      github
    );

    expect(engineer.getGithub()).toBe(github);
  });
});
