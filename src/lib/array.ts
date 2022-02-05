// static size
// insert()
// print()
// removeAt()
// indexOf()

export class ArrayData<T> {
  constructor(private length: number) {
    this._length = length;
    this._data = [];
    this._currentIndex = 0;
    this._maxIndex = length - 1;
  }

  private _data: Array<T>;
  private _length: number;
  private _currentIndex: number;
  private _maxIndex: number;

  getLength = (): number => this._length;

  insert(item: T) {
    if (this._currentIndex === this._maxIndex) {
      throw 'exceeded array length!';
    }

    this._data[this._currentIndex] = item;

    if (this._currentIndex < this._maxIndex) this._currentIndex++;
  }

  print() {
    for (let i = 0; i < this._data.length; i++) console.log(this._data[i]);
  }
}
