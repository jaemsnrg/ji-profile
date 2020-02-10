import { sliceInHalf } from "./array";

describe('array utilities', () => {

  it('should slice arrays of even length in half correctly', () => {
    const halves = sliceInHalf([
      23, 43234, 4232431, 54342, 132123, 32423
    ]);
    expect(halves.firstHalf).toEqual([
      23, 43234, 4232431
    ]);
    expect(halves.secondHalf).toEqual([
      54342, 132123, 32423
    ]);

    const halves2 = sliceInHalf([
      23, 43234, 4232431, 54342, 43543,
      132123, 32423, 5345343, 65644353, 23
    ]);
    expect(halves2.firstHalf).toEqual([
      23, 43234, 4232431, 54342, 43543
    ]);
    expect(halves2.secondHalf).toEqual([
      132123, 32423, 5345343, 65644353, 23
    ]);
  });

  it('should slice arrays of odd length in half correctly', () => {
    
    const halves = sliceInHalf([
      1, 2, 3, 4, 5, 6, 7
    ]);
    expect(halves.firstHalf).toEqual([
      1, 2, 3
    ]);
    expect(halves.secondHalf).toEqual([
      4, 5, 6, 7
    ]);

    const halves2 = sliceInHalf([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19
    ]);
    expect(halves2.firstHalf).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ]);
    expect(halves2.secondHalf).toEqual([
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19
    ]);
  });
});