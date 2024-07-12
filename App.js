import * as React from 'react';
import Navigator from './src/navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {


    return (
      <SafeAreaProvider>   
            <Navigator />
      </SafeAreaProvider>
    );
  }
  
  export default App;