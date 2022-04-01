import styled from "styled-components";
import Asosiy from "./components/Asosiy";
import Kurslar from "./components/Kurslar";
function App() {
  return (
    <AppContainer>
      <Asosiy />
      <Kurslar/>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`

`