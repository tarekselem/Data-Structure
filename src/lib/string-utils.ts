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
}
