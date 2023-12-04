export class Search {
  public static linear(inputArr: number[], value: number): number {
    let i = 0;
    while (i < inputArr.length) {
      if (inputArr[i] === value) return i;
      i++;
    }
    return -1;
  }

  public static binary(
    inputArr: number[],
    value: number,
    leftIndex: number = 0,
    rightIndex: number = inputArr.length - 1
  ): number {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    console.log(leftIndex, rightIndex, middleIndex);

    if (rightIndex >= leftIndex) return -1;
    if (inputArr[middleIndex] === value) return middleIndex;

    //left
    if (inputArr[middleIndex] > value)
      this.binary(inputArr, value, leftIndex, middleIndex - 1);
    //right
    else this.binary(inputArr, value, middleIndex + 1, rightIndex);
  }

  private static getMiddleIndex(inputArr: number[]): number {
    return (inputArr.length - 1) % 2;
  }
}
