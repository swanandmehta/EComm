import { JournalSource } from './journal-source';

describe('JournalSource', () => {
  it('should create an instance', () => {
    expect(new JournalSource("", "")).toBeTruthy();
  });
});
