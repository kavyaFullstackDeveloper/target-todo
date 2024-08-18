
//components
import Home from './components/Home';
import DataProvider from './context/DataProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
    <DataProvider>
      <Home />
    </DataProvider>
    </ThemeProvider>
  );
}

export default App;