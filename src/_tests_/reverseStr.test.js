import {reverseStr} from "./utils/reverseStr.js";

describe( 'tests for reverseStr function', () => {
    const str = 'Hello all!';
    const reversedString = '!lla olleH'
    const wrongReversedString = ' lla olleH'

    it("it should correctly and wrong reverse the string", () => {
        expect(reverseStr(str)).toBe(`${reversedString}`);
        expect(reverseStr(str)).not.toBe(`${wrongReversedString}`);
    })
})