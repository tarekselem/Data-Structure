import { ArrayData } from './array';

export class ArrayDataTests {
  constructor() {
    console.log('initializing ArrayData tests...');
  }

  runArrayDataTests() {
    console.log('running ArrayData tests...');
    this.testArrayLength();
    this.testInsert();
    this.testIndexOf();
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

  private testIndexOf() {
    // Arrange
    const data = new ArrayData<Number>(3);
    data.insert(11);
    data.insert(12);
    data.insert(13);

    // Act
    const result = data.indexOf(12);
    // Assert
    console.assert(result === 1, '=>faild: testArrayIndexOf');
  }
}
