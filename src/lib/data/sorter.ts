export class Sorter {
  static asBubble(inputArr: number[]): number[] {
    for (let i = 0; i < inputArr.length; i++) {
      for (let j = 1; j < inputArr.length - i; j++) {
        if (inputArr[j] < inputArr[j - 1]) {
          this.swapElements(inputArr, j, j - 1);
        }
      }
    }
    return inputArr;
  }

  private static swapElements(arr: number[], x: number, y: number) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  static asSelection(inputArr: number[]): number[] {
    for (let i = 0; i < inputArr.length; i++) {
      let lestIndex = this.findMinimumIndex(inputArr, i);
      this.swapElements(inputArr, i, lestIndex);
    }

    return inputArr;
  }

  private static findMinimumIndex(
    arr: number[],
    startingIndex: number
  ): number {
    let minimumItemValue = arr[startingIndex];
    let minimumItemIndex = startingIndex;
    for (let i = startingIndex; i < arr.length; i++) {
      if (minimumItemValue > arr[i]) {
        minimumItemValue = arr[i];
        minimumItemIndex = i;
      }
    }

    return minimumItemIndex;
  }

  static asInsertion(inputArr: number[]): number[] {
    return inputArr;
  }
}
