import get from "../comp.se.200-lib/src/get";

describe("get function", () => {
  test("get should return correct value when called with valid arguments", () => {
    const object = { a: { b: { c: 1 } } };
    const path = "a.b.c";
    const result = get(object, path);
    const expectedResult = 1;
    expect(result).toEqual(expectedResult);
  });

  test("get should return default value when called with invalid path and setted defaultvalue", () => {
    const object = { a: { b: { c: 1 } } };
    const path = "a[2].b.c";
    const defaultValue = "def";
    const result = get(object, path, defaultValue);
    const expectedResult = defaultValue;
    expect(result).toEqual(expectedResult);
  });

  test("get should return correct value when path is array", () => {
    const object = { a: { b: { c: 1 } } };
    const path = ["a", "0", "b", "c"];
    const result = get(object, path);
    const expectedResult = 1;
    expect(result).toEqual(expectedResult);
  });

  test("get should return default value when called with null  setted defaultvalue", () => {
    const object = null;
    const path = "a[2].b.c";
    const defaultValue = "def";
    const result = get(object, path, defaultValue);
    const expectedResult = defaultValue;
    expect(result).toEqual(expectedResult);
  });
});
