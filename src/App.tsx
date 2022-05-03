import { Button, Paper, Text, Loader, MantineProvider } from '@mantine/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <MantineProvider theme={{
        fontFamily: "Open Sans",
        colorScheme: "dark",
        fontSizes: {md: 12},
        radius: {sm:232}
      }}>
        <Paper>
          <Text>SIMPLE TEXT</Text>
          <Text>MORE SIMPLE TEXT</Text>
        </Paper>
        <Button>Hello world!</Button>
        <Button>Hello world!</Button>
        <Loader />
      </MantineProvider>
    </div>
  );
}

export default App;
