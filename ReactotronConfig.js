import Reactotron from 'reactotron-react-native'

// ReactotronConfig.js
import { reactotronRedux } from 'reactotron-redux'


// then add it to the plugin list
const reactotron = Reactotron
  //.configure({ name: 'React Native Demo' })
  .use(reactotronRedux()) //  <- here i am!
  .connect() //Don't forget about me!
  
export default reactotron
// Reactotron
//   .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
//   .configure() // controls connection & communication settings
//   .useReactNative() // add all built-in react native plugins
//   .connect() // let's connect!