import React, {useState} from 'react';
import Home from './screens/Home';
import {CustomDarkTheme, CustomDefaultTheme} from './Theme';
import {Provider} from 'react-native-paper';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const theme = darkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <Provider theme={theme}>
      <Home />
    </Provider>
  );
};

export default App;
