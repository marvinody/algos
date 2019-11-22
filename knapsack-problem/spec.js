// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./index');
const chai = require('chai');
describe('Knapsack Problem', () => {

  it('Test Case #1', function () {
    chai
      .expect(program.knapsackProblem([[1, 2], [4, 3], [5, 6], [6, 7]], 10))
      .to.deep.equal([10, [1, 3]]);
  });

  it('Test Case #2', function () {
    chai
      .expect(
        program.knapsackProblem(
          [
            [465, 100], //0
            [400, 85],
            [255, 55], // 2
            [350, 45],
            [650, 130], // 4
            [1000, 190],
            [455, 100], // 6
            [100, 25],
            [1200, 190], // 8
            [320, 65],
            [750, 100], // 10
            [50, 45],
            [550, 65], // 12
            [100, 50],
            [600, 70], // 14
            [240, 40],
          ],
          200,
        ),
      )
      .to.deep.equal([1500, [3, 12, 14]]);
  });

  it('Test Case #3', function () {
    chai
      .expect(
        program.knapsackProblem(
          [
            [465, 100],
            [400, 85],
            [255, 55],
            [350, 45],
            [650, 130],
            [1000, 190],
            [455, 100],
            [100, 25],
            [1200, 190],
            [320, 65],
            [750, 100],
            [50, 45],
            [550, 65],
            [100, 50],
            [600, 70],
            [255, 40],
          ],
          200,
        ),
      )
      .to.deep.equal([1505, [7, 12, 14, 15]]);
  });

  it('Test Case #4', function () {
    chai
      .expect(
        program.knapsackProblem(
          [[2, 1], [70, 70], [30, 30], [69, 69], [100, 100]],
          100,
        ),
      )
      .to.deep.equal([101, [0, 2, 3]]);
  });

  it('Test Case #5', function () {
    chai
      .expect(
        program.knapsackProblem(
          [[1, 2], [70, 70], [30, 30], [69, 69], [100, 100]],
          100,
        ),
      )
      .to.deep.equal([100, [1, 2]]);
  });

  it('Test Case #6', function () {
    chai
      .expect(
        program.knapsackProblem(
          [[1, 2], [70, 70], [30, 30], [69, 69], [100, 100]],
          0,
        ),
      )
      .to.deep.equal([0, []]);
  });

})
