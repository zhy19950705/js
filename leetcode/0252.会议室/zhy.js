/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  intervals.sort(([a], [b]) => a - b);
  for (let i = 0; i < intervals.length - 1; i++) {
    const [start, end] = intervals[i];
    const [nextStart, nextEnd] = intervals[i + 1];
    if (nextStart < end) {
      return false;
    }
  }
  return true;
};
