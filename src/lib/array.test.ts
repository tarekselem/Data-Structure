import { ArrayData } from './array';

export class ArrayDataTests {
  constructor() {
    console.log('initializing ArrayData tests...');
  }

  runArrayDataTests() {
    console.log('running ArrayData tests...');
    this.testArrayLength();
    this.testInsert();
  }

  private testArrayLength() {
    // Arrange
    const data = new ArrayData<Number>(3);
    let length: number;

    // Act
    length = data.size();

    // Assert
    console.assert(length === 0, '=>faild: testArrayLength');
  }

  private testInsert() {
    // Arrange
    const data = new ArrayData<Number>(3);

    // Act
    data.insert(3);

    // Assert
    console.assert(data.size() === 1, '=>faild: testArrayInsert');
  }
}
