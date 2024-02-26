import countReducer from '../../src/reducers/countReducer'
import { testData1, testData2 } from '../__mocks__/mocks';

describe("countReducer",() =>{
    
    it("increases count by 1 ", () =>{
        const result = countReducer(testData1,{type:'SET_NUMBER', payload : 1});
        expect(result.count).toBe(1);
    });
    it("decreases count by 1 ", () =>{
        const result = countReducer(testData1,{type:'SET_NUMBER', payload : -1});
        expect(result.count).toBe(-1);
    });
    it("increases delta by 10 ", () =>{
        const result = countReducer(testData1,{type:'SET_DELTA', payload : 10});
        expect(result.delta).toBe(10);
    });
    it("decreases delta by 10 ", () =>{
        const result = countReducer(testData1,{type:'SET_DELTA', payload : -10});
        expect(result.delta).toBe(-10);
    });
    it("resets delta to 0 ", () =>{
        const result = countReducer(testData2,{type:'RESET_DELTA'});
        expect(result.delta).toBe(0);
    });
    it("Resets count to 0 ", () =>{
        const result = countReducer(testData2,{type:'RESET_COUNT'});
        expect(result.count).toBe(0);
    });;
    it("Returns default state ", () =>{
        const result = countReducer(testData1,{type:'DEFAULT'});
        expect(result.count).toBe(0);
    });

});