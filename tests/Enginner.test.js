const Employee = require("../tests/Engineer");

describe("Engineer main Objects", () => {
 
    it("should give back the Employee role back if I run getRole()", ()=> {
        const valueObj = new Engineer();
        expect(valueObj.getRole()).toBe("Employee")
    })
  })