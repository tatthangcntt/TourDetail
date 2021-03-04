import Reactotron from 'reactotron-react-native';

// eslint-disable-next-line no-undef
const dev = __DEV__;

function configure() {
  Reactotron
    // .configure({host:'192.168.1.78'})//192.168.0.103
    .configure({host: '192.168.1.3'}) //192.168.0.103
    // .configure() // controls connection & communication settings
    .useReactNative(); // add all built-in react native plugins

  connectConsoleToReactotron();
  return Reactotron.connect();
}

function connectConsoleToReactotron() {
  console.log = Reactotron.log;
  if (!dev) {
    return;
  }
  //  console.log = Reactotron.log;
  // console.warn = Reactotron.warn;
  // console.error = Reactotron.error;
}

export default {
  configure,
};
