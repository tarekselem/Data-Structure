// removeAt()
// indexOf()

export class ArrayData<T> {
  constructor(private length: number) {
    this._length = length;
    this._data = [];
    this._currentIndex = -1;
    this._maxIndex = length - 1;
  }

  private _data: Array<T>;
  private _length: number;
  private _currentIndex: number;
  private _maxIndex: number;

  size = (): number => this._currentIndex + 1;

  insert(item: T) {
    this._currentIndex++;

    if (this._currentIndex > this._maxIndex) {
      throw 'exceeded array length!';
    }

    this._data[this._currentIndex] = item;
  }

  print() {
    for (let i = 0; i <= this._currentIndex; i++) console.log(this._data[i]);
  }
}
