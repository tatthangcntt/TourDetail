import moment from 'moment';
import 'moment/locale/vi';
import constants from './constants';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = MINUTE * 60;
const DAY = 24 * HOUR;

const TIME_VALUE = {
  SECOND,
  MINUTE,
  HOUR,
  DAY,
};

export function convertDateTime(date_time, format, current_format) {
  let time;
  if (date_time) {
    if (current_format) {
      time = moment(date_time, current_format).format(format);
    } else {
      time = moment(date_time, 'YYYY/MM/DD').format(format);
    }
  } else {
    time = moment().format(format);
  }
  return time;
}

export function convertDateTimeCountDownTime(date_time) {
  const date_time_ts = moment(date_time).unix();
  const now_ts = moment().unix();
  const ts = now_ts - date_time_ts;
  if (ts < constants.TS_PER_MIN) {
    return `${ts} giây trước.`;
  }
  if (constants.TS_PER_MIN <= ts && ts < constants.TS_PER_HOUR) {
    return `${~~(ts / constants.TS_PER_MIN)} phút trước`;
  }
  if (constants.TS_PER_HOUR <= ts && ts < constants.TS_PER_DAY) {
    return `${~~(ts / constants.TS_PER_HOUR)} giờ trước`;
  }
  if (ts > constants.TS_PER_DAY) {
    return `${~~(ts / constants.TS_PER_DAY)} ngày trước`;
  }
}

export function getTimeStamp(time, format) {
  let timestamp;
  if (time) {
    timestamp = moment(time, format).unix();
  } else {
    timestamp = moment(new Date()).unix();
  }
  return timestamp;
}

export function getCurrentTime(format) {
  const date_format = format ? format : 'YYYY-MM-DD';
  return moment(new Date()).format(date_format);
}

export function getTimeFromTimestamp(timestamp, format) {
  return moment(new Date(timestamp * 1000)).format(format);
}

export default {
  TIME_VALUE,
};
