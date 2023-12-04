export class StringUtils {
  public static countVowels(str: string): number {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    [...str].forEach((char) => {
      if (vowels.includes(char.toLowerCase())) count++;
    });

    return count;
  }

  public static reverse(str: string): string {
    const arr = [...str];
    let reversedStr = '';

    for (let i = arr.length - 1; i >= 0; i--) reversedStr += arr[i];
    return reversedStr;
  }

  public static reverseWords(str: string): string {
    const arr = str.split(' ');
    let reversedStr = '';

    for (let i = arr.length - 1; i >= 0; i--)
      reversedStr += `${i === 0 ? arr[i] : arr[i] + ' '}`;
    return reversedStr;
  }

  public static removeDuplicates(str: string): string {
    const seen = new Set<string>();
    let cleanStr = '';

    [...str].forEach((char) => {
      if (!seen.has(char)) {
        seen.add(char);
        cleanStr += char;
      }
    });

    return cleanStr;
  }

  public static findMostRepeatedCharacters(str: string): string {
    const seen = new Map<string, number>();

    [...str].forEach((char) => {
      let seenCount = seen.get(char) ?? 0;
      seen.set(char, ++seenCount);
    });

    let mostRepeatativeEntry = { char: '', count: 0 };
    seen.forEach((count, char) => {
      if (count > mostRepeatativeEntry.count)
        mostRepeatativeEntry = {
          count,
          char
        };
    });

    return mostRepeatativeEntry.char;
  }

  public static capitalizeSentence(sentence: string): string {
    let capitalized = '';
    const words = sentence.split(' ');
    words.forEach((word, i) => {
      const lastWordIndex = words.length - 1;
      if (word !== '') {
        capitalized += `${this.capitalizeString(word)}${
          i === lastWordIndex ? '' : ' '
        }`;
      }
    });

    return capitalized;
  }

  private static capitalizeString(str: string) {
    const firstCharCode = str.charCodeAt(0);
    return `${String.fromCharCode(firstCharCode - 32)}${str.substring(1)}`;
  }

  public static areAnagrams(word1: string, word2: string): boolean {
    let result = true;

    [...word1].forEach((char) => {
      if (![...word2].includes(char)) {
        result = false;
      }
    });

    return result;
  }

  public static isPalinrome(word: string): boolean {
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
      if (word[left++] !== word[right--]) {
        return false;
      }
    }
    return true;
  }

  public static flipVowels(word: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let matches = Array.from(word).reduce((acc, current, i) => {
      if (vowels.includes(current)) acc.push(i);

      return acc;
    }, []);

    const flippedWord = Array.from(word);
    const isOdd = matches.length % 2 !== 0;
    let pivotIndex = ~~(matches.length / 2);
    pivotIndex = !isOdd ? --pivotIndex : pivotIndex;

    console.log(word, 'pivotIndex:', pivotIndex);

    for (let i = 0; i <= pivotIndex; i++) {
      let temp = flippedWord[matches[i]];
      flippedWord[matches[i]] = flippedWord[matches[pivotIndex + 1]];
      flippedWord[matches[pivotIndex + 1]] = temp;
    }

    return flippedWord.join('');
  }

  // public static solution(S: string): number {
  //   let a = 0;

  //   if (S.length < 2 || S.indexOf('H') == -1 || S.indexOf('-') == -1) return -1;
  //   let b = S;
  //   let l = b.length;
  //   if (b.charAt(0) == 'H') {
  //     if (b.charAt(1) == 'H') return -1;
  //     else b = b.replace(1, 2, 'T');
  //   }
  //   if (b.charAt(l - 1) == 'H') {
  //     if (b.charAt(l - 2) == 'H') return -1;
  //     else b = b.replace(l - 2, l - 1, 'T');
  //   }
  // }

  public static getNumberOfTanx(S: string): number {
    if (S.length === 0 || S.length === 1) return -1;
    let hPositions = [];
    let tCount = 0;
    let hifenCount = 0;
    let hCount = 0;

    for (let i = 0; i < S.length; i++) {
      if (S[i] === '-') hifenCount++;

      if (S[i] === 'H') {
        hCount++;
        hPositions.push(i);
      }
    }

    if (hifenCount < ~~(hCount / 2)) return -1;

    for (let i = 1; i < hPositions.length; i++) {
      let n = hPositions[i] - hPositions[i - 1];

      if (n === 2) {
        tCount++;
        hPositions.splice(i, 1);
        hPositions.splice(i - 1, 1);

        i--;
      }
    }

    console.log(hPositions, tCount, hifenCount, hCount);

    for (let h = 0; h < hPositions.length; h++) {
      if (hPositions[h] === 0) {
      } else if (hPositions[h] === S.length - 1) {
      } else if (S[h - 1] === '-' || S[h + 1] === '-') {
        tCount++;
      } else {
        return -1;
      }
    }

    return tCount === 0 ? -1 : tCount;
  }
}
