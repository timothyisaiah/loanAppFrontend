import {calculateInterest} from "../LoanApp";


describe("Calculating Interest", ()=>{
    it("Should Return Interest", ()=>{
    const interest = calculateInterest(3000000,0.2,2);
         expect(interest).toBe(1200000);
    });
});

// describe("Values are null", ()=>{

//     it("should not calculate", ()=>{
//         const interest = calculateInterest(0,0,0);
//         expect(interest).toBe(0);

//     });

// });





