export function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const inputStr = x.toString();
  const reversedStr = inputStr.split('').reverse().join('');

  return inputStr === reversedStr;
}
