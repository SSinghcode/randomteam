const Intern = require("../lib/Intern");
describe("Intern main Objects", () => {
   
it("should give the intern's school name back if I run getSchool()", ()=> {
    const valueObj = new Intern("LPS");
    expect(valueObj.getSchool()).toBe("LPS")
})
})