let NODE_DEV = 'development';

if (__DEV__) {
  NODE_DEV = 'development';
} else {
  NODE_DEV = 'production';
}

// console.log('Environment: ', NODE_DEV);

const serverURL = {
  development: 'https://staging.tourmega.com/api/v2/',
  production: 'https://staging.tourmega.com/api/v2/',
};
export default {
  currentNode: NODE_DEV,
  serverURL: serverURL[NODE_DEV],
};
