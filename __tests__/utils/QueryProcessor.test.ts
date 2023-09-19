import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "rgluo"
          ));
    });

    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "rat"
          ));
    });

    test('should return correct sum', () => {
        const query = "What is 11 plus 49?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "60"
          ));
    });

    test('should return correct max', () => {
        const query = "Which of the following numbers is the largest: 18, 59, 76?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "76"
          ));
    });
    
    test('should return correct product', () => {
        const query = "What is 35 multiplied by 42?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "1470"
          ));
    });
});