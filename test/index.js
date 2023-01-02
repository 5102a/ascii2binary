/**
 * mocha test
 */
const assert = require('assert')
const fs = require('fs')
const path = require('path')
const { ascii2binary } = require('../dist/index.cjs')

const eq = (a, e) => () => assert.equal(new Uint8Array(a).join(''), new Uint8Array(e).join(''))

const asciiToArrayBuffer = (s) => new Uint8Array(Buffer.from(s, 'base64')).buffer
const arrayBufferToAscii = (s) => Buffer.from(s).toString('base64')

describe('ascii2binary', function () {

  describe('basic ascii str', function () {
    const testStrArr = [
      'yq==',
      'yqq=',
      'a+/0saA=',
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    ]

    testStrArr.forEach((s) => {
      it(s, eq(ascii2binary(s), asciiToArrayBuffer(s)));
    })
  });

  // image base64 to raw binary data
  describe('binary data', function () {
    const arrayBuffer = new Uint8Array(fs.readFileSync(path.resolve(__dirname, './test.png'))).buffer
    const base64 = arrayBufferToAscii(arrayBuffer)

    it('base64 to binary', eq(ascii2binary(base64), arrayBuffer));
  });
});