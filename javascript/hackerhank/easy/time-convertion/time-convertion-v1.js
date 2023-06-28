import { timeConv } from './timeConv-v3.js';

//
// In all case we want to remove both AM and PM.
//

describe('timeConv()', () => {
  test('12 AM (midnight)', () => {
    //
    // Replace 12 (hour) with 00 (hour).
    //

    expect(timeConv('12:00:00AM')).toEqual('00:00:00');
    expect(timeConv('12:00:01AM')).toEqual('00:00:01');
    expect(timeConv('12:59:59AM')).toEqual('00:59:59');
    expect(timeConv('12:12:12AM')).toEqual('00:12:12');
  });

  test('01 AM (dawn, morning)', () => {
    //
    // Just remove "AM".
    //

    expect(timeConv('01:00:00AM')).toEqual('01:00:00');
    expect(timeConv('11:59:59AM')).toEqual('11:59:59');
  });

  test('12 PM (noon, lunch time)', () => {
    //
    // Just remove "PM".
    //

    expect(timeConv('12:00:00PM')).toEqual('12:00:00');
    expect(timeConv('12:59:59PM')).toEqual('12:59:59');
  });

  test('01 to 11 PM', () => {
    //
    // Add 12 to the hour.
    //

    expect(timeConv('01:00:00PM')).toEqual('13:00:00');
    expect(timeConv('07:00:00PM')).toEqual('19:00:00');
    expect(timeConv('11:59:59PM')).toEqual('23:59:59');
  });
});
