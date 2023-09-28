
  const values = {amount: 10000, years: 10, rate: 1.5};


describe("getCurrentUIValues tests", function(){
    it('should return UI as an object', function(){
      expect(getCurrentUIValues()).toEqual({amount: 10000, years: 10, rate: 1.5})
    });
});

describe("setUpInitialValues tests", function(){
    it('should get input from the dom', function(){
      const amountUI = document.getElementById('loan-amount');
      expect(amountUI.value).toEqual('10000');
      const yearsUI = document.getElementById('loan-years');
      expect(yearsUI.value).toEqual('10');
      const rateUI = document.getElementById('loan-rate');
      expect(rateUI.value).toEqual('1.5');
    });

});


describe("calculateMonthly tests", function() {

    it('should calculate the monthly rate correctly', function () {
      expect(calculateMonthlyPayment(values)).toEqual('89.79')
    });

    it("should return a result with 2 decimal places", function() {
      expect(calculateMonthlyPayment(values)).toMatch(/^\d+\.\d\d$/);
    });

    it('should return a string', function() {
      expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
    });
});

describe('updateMonthly tests', function(){
  it('should receive a string and update the UI to show the value', function(){
    const monthlyUI = document.getElementById('monthly-payment');
    updateMonthly('131.34');
    expect(monthlyUI.innerText).toEqual('$131.34'); 
  });
})