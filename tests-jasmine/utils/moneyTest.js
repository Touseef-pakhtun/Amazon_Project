import formatCurrency from"../../scripts/utils/money.js";

describe("test suite for formatCurrency function:", 
    () => {
        it("converts cents to dollars", ()=> {
            expect(formatCurrency(2095)).toEqual('20.95');
        });

        it("work for zero cents", ()=> {
            expect(formatCurrency(0)).toEqual('0.00');
        });

        it("rounds correctly for fractional cents", ()=> {
            expect(formatCurrency(2000.5)).toEqual('20.01');
        });
});