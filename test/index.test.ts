import * as Exports from '../src';

describe('index', () => {
  it('exports the right stuff', () => {
    expect(Exports.calculate).toBeDefined();
    expect(Exports.calculateSync).toBeDefined();
    expect(Exports.DerangementError).toBeDefined();
  });
});
