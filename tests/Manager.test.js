const Manager = require('../lib/Manager');
describe("Employee main Objects", () => {
    it("should create an object when I initialize new Employee", ()=> {
        const valueObj = new Manager();
        expect(typeof(valueObj)).toBe("object")
    })

// creating manager object  
it("should get me the Employee's Id back if I access the id property of the object created", ()=> {
    const valueObj = new Manager("shamsher", 11);
    expect(valueObj.id).toBe(11)
})
})