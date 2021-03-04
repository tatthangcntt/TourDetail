import axios from 'axios';
import constants from 'libraries/utils/constants';
import env from '../../env';
import R from 'res/R';
const instance = axios.create({
  baseURL: env.serverURL,
  timeout: constants.SERVER_TIMEOUT,
});
instance.interceptors.response.use(
  (response) => {
    // console.log({response});
    return response;
  },
  function (error) {
    console.log(error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      console.log(error.response.status);
      return Promise.reject(error.response);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
      return Promise.reject({
        status: '',
        message: 'Thời gian phản hồi quá lâu!',
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', error.message);
      return Promise.reject({status: '', message: error.message});
    }
    // console.log(error.config);
    // return Promise.reject(error.response);
  },
);

const AUTH = {
  YES: true,
  NO: false,
};
function fetch(url, data, isAuth) {
  var headers = {};
  console.log('fetch -> isAuth', isAuth);
  if (isAuth) {
    headers = {...headers, Authorization: `${R.USER_TOKEN}`};
  }
  return instance
    .get(url, {
      params: {
        ...data,
      },
      headers,
    })
    .then((response) => response.data)
    .catch((error) => error);
}

function post(url, data, isAuth) {
  var headers = {tenant: R.TENANT};
  if (isAuth) {
    headers = {...headers, Authorization: `${R.USER_TOKEN}`};
  }
  return instance
    .post(
      url,
      {...data},
      {
        headers,
      },
    )
    .then((response) => response.data)
    .catch((error) => error);
}

function postForm(url, data, isAuth) {
  let formData = new FormData();

  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (Array.isArray(value)) {
      value.forEach((val) => formData.append(`${key}[]`, val));
    } else {
      formData.append(key, value);
    }
  });
  var headers = {tenant: R.TENANT};
  if (isAuth) {
    headers = {...headers, Authorization: `${R.USER_TOKEN}`};
  }
  return instance
    .post(url, formData, {
      headers,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    })
    .then((response) => response)
    .catch((error) => error);
}

function put(url, data, isAuth) {
  var headers = {tenant: R.TENANT};
  if (isAuth) {
    headers = {...headers, Authorization: `${R.USER_TOKEN}`};
  }

  return instance
    .put(
      url,
      {...data},
      {
        headers,
      },
    )
    .then((response) => response)
    .catch((error) => error);
}

function del(url, isAuth) {
  var headers = {tenant: R.TENANT};

  if (isAuth) {
    headers = {...headers, Authorization: `${R.USER_TOKEN}`};
  }

  return instance
    .delete(url, {
      headers,
    })
    .then((response) => response)
    .catch((error) => error);
}
// https://pna-api-test.quanlybaohanh.com.vn/service-order/finish-processing/bc15a689-b2bc-4552-b251-6647981df48a

// eslint-disable-next-line no-undef
export default apis = {
  PATH: {
    TOUR: 'tours',
    LOGIN: 'login',
  },
  AUTH,
  fetch,
  post,
  put,
  postForm,
  del,
};
