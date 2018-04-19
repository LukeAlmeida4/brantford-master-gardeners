describe("The name validator", function(){

   describe("Checks for empty string", function(){

       it("should return true when the strings are not empty", function ()
       {
           expect(doValidate_frmContact(
               $("#txtFirstName").val("Milan"),
               $("#txtLastName").val("Stefanovic"),
               $("#txtEmailAddress").val("milan@test.com"),
               $("#selSubject").val("General Inquiry"),
               $("#txtMessage").val("test"))).toBe(true);
       });

       it("Should return false when a string is empty", function ()
       {
            expect(doValidate_frmContact("   ")).toBe(false);
       });

   });

});
