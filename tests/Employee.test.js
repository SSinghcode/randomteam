const Employee = require("../lib/Employee");

describe("Employee main Objects", () => {
    it("should create an object when I initialize new Employee", ()=> {
        const valueObj = new Employee();
        expect(typeof(valueObj)).toBe("object")
    })

    it("should give back the Employee role back if I run getRole()", ()=> {
        const valueObj = new Employee();
        expect(valueObj.getRole()).toBe("Employee")
    })

    it("should give the Employee's name back if I run getName()", ()=> {
        const valueObj = new Employee("Shamsher");
        expect(valueObj.getName()).toBe("shamsher")
    })

    it("should give the Employee's name back if I access the name property of the object created", ()=> {
        const valueObj = new Employee("shamsher");
        expect(valueObj.name).toBe("shamsher")
    })

    it("should get me the Employee's Id back if I access the id property of the object created", ()=> {
        const valueObj = new Employee("shamsher", 11);
        expect(valueObj.id).toBe(11)
    })
})