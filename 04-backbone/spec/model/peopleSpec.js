define(['js/model/People'], function (People) {
  describe("People Model Spec", function () {
    
    it("Check full name generator", function () {
      var people = new People({
        firstName: 'Christopher',
        lastName: 'Nolan',
        role: 'Director'
      });
      expect(people.getName()).toEqual('Christopher Nolan');
    });

    it("Prevent emty name", function () {
      var people = new People({
        firstName: ''
      });
      expect(people.isValid()).toBe(false);
    });
  });
});