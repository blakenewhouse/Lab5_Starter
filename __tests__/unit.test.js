// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// phone number
test('checks if 000-000-0000 is a phone number', () => {
  expect(isPhoneNumber('000-000-0000')).toBe(true);
});
test('checks if 123-456-7890 is a phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('checks if 101020 is a phone number', () => {
  expect(isPhoneNumber('101020')).toBe(false);
});
test('checks if abc-efg-hijk is a phone number', () => {
  expect(isPhoneNumber('abc-efg-hijk')).toBe(false);
});

// email
test('checks if blakenewhouse12@gmail.com is an email', () => {
  expect(isEmail('blakenewhouse12@gmail.com')).toBe(true);
});
test('checks if blnewhouse@ucsd.edu is an email', () => {
  expect(isEmail('blnewhouse@ucsd.edu')).toBe(true);
});
test('checks if 101020@121.123 is an email', () => {
  expect(isEmail('101020@121.123')).toBe(false);
});
test('checks if abc-efg-hijk is an email', () => {
  expect(isEmail('abc-efg-hijk')).toBe(false);
});

// password
test('checks to see if a9nf82AuP is a strong password', () => {
  expect(isStrongPassword('a9nf82AuP')).toBe(true);
});
test('checks to see if V9Buroe_348 is a strong password', () => {
  expect(isStrongPassword('V9Buroe_348')).toBe(true);
});
test('checks to see if 1294sdpfEBU is a strong password', () => {
  expect(isStrongPassword('1294sdpfEBU')).toBe(false);
});
test('checks to see if 12_94ss!)nfBU is a strong password', () => {
  expect(isStrongPassword('12_94ss!)nfBU')).toBe(false);
});

// date
test('checks to see if 12/31/2005 is a valid date', () => {
  expect(isDate('12/31/2005')).toBe(true);
});
test('checks to see if 2/1/2025 is a valid date', () => {
  expect(isDate('2/1/2025')).toBe(true);
});
test('checks to see if 132/13/2025 is a valid date', () => {
  expect(isDate('132/13/2025')).toBe(false);
});
test('checks to see if 2/13/20253 is a valid date', () => {
  expect(isDate('2/13/20253')).toBe(false);
});

// hex color
test('checks to see if #2FA is a valid hex', () => {
  expect(isHexColor('#2FA')).toBe(true);
});
test('checks to see if #20a45c is a valid hex', () => {
  expect(isHexColor('#20a45c')).toBe(true);
});
test('checks to see if #10Plfs is a valid hex', () => {
  expect(isHexColor('#10Plfs')).toBe(false);
});
test('checks to see if #20C5 is a valid hex', () => {
  expect(isHexColor('#20C5')).toBe(false);
});