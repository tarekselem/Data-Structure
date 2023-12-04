export function isIsomorphicA(s: string, t: string): boolean {
  if (!s || !t) return false;

  if (s.length !== t.length) return false;

  const mapS = new Map<string, string>();
  [...s].forEach((char, i) => {
    if (mapS.has(char)) {
      mapS.set(char, `${mapS.get(char)},${i}`);
    } else {
      mapS.set(char, `${i}`);
    }
  });

  const mapT = new Map<string, string>();
  [...t].forEach((char, i) => {
    if (mapT.has(char)) {
      mapT.set(char, `${mapT.get(char)},${i}`);
    } else {
      mapT.set(char, `${i}`);
    }
  });

  const sResults = [...mapS].map((kv) => kv[1]).join('');
  const tResults = [...mapT].map((kv) => kv[1]).join('');

  return sResults === tResults;
}

export function isIsomorphic(s: string, t: string): boolean {
  if (!s || !t) return false;

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(t[i]) !== s.indexOf(s[i])) {
      return false;
    }
  }
  return true;
}
