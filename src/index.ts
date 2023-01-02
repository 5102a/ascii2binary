'use strict'

// Base64 char code map
const baseCodeMap: Record<string, number> = {
  0: 0b00110100,
  1: 0b00110101,
  2: 0b00110110,
  3: 0b00110111,
  4: 0b00111000,
  5: 0b00111001,
  6: 0b00111010,
  7: 0b00111011,
  8: 0b00111100,
  9: 0b00111101,
  A: 0b00000000,
  B: 0b00000001,
  C: 0b00000010,
  D: 0b00000011,
  E: 0b00000100,
  F: 0b00000101,
  G: 0b00000110,
  H: 0b00000111,
  I: 0b00001000,
  J: 0b00001001,
  K: 0b00001010,
  L: 0b00001011,
  M: 0b00001100,
  N: 0b00001101,
  O: 0b00001110,
  P: 0b00001111,
  Q: 0b00010000,
  R: 0b00010001,
  S: 0b00010010,
  T: 0b00010011,
  U: 0b00010100,
  V: 0b00010101,
  W: 0b00010110,
  X: 0b00010111,
  Y: 0b00011000,
  Z: 0b00011001,
  a: 0b00011010,
  b: 0b00011011,
  c: 0b00011100,
  d: 0b00011101,
  e: 0b00011110,
  f: 0b00011111,
  g: 0b00100000,
  h: 0b00100001,
  i: 0b00100010,
  j: 0b00100011,
  k: 0b00100100,
  l: 0b00100101,
  m: 0b00100110,
  n: 0b00100111,
  o: 0b00101000,
  p: 0b00101001,
  q: 0b00101010,
  r: 0b00101011,
  s: 0b00101100,
  t: 0b00101101,
  u: 0b00101110,
  v: 0b00101111,
  w: 0b00110000,
  x: 0b00110001,
  y: 0b00110010,
  z: 0b00110011,
  '+': 0b00111110,
  '/': 0b00111111,
  '=': 0b01000000,
}

/**
 * ascii to binary ( base64 string to ArrayBuffer)
 * @returns ArrayBuffer
 */
const ascii2binary = (base64Str: string) => {
  let len = base64Str.length
  if (!len || len % 4) {
    throw Error('The base64 string length must be a multiple of 4')
  }

  const buff = []
  let i = -1

  let code1 = 0
  let code2 = 0
  let code3 = 0
  let code4 = 0

  len -= 2
  while (++i < len) {
    code1 = baseCodeMap[base64Str[i]]
    code2 = baseCodeMap[base64Str[++i]]
    code3 = baseCodeMap[base64Str[++i]]
    code4 = baseCodeMap[base64Str[++i]]

    buff.push(
      (code1 << 2) | (code2 >>> 4),
      ((code2 & 0b1111) << 4) | (code3 >>> 2),
      ((code3 & 0b11) << 6) | (code4 & 0b111111)
    )
  }

  if (code3 === 64) {
    buff.pop()
    buff.pop()
  } else {
    if (code4 === 64) {
      buff.pop()
    }
  }

  return Uint8Array.from(buff).buffer
}

export { ascii2binary }
