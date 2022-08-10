import styled from 'styled-components';
import Header from './components/Header';
import Sale from './components/Sale';
import {GlobalStyle} from './styles/GlobalStyle';


function App() {
    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            <Sale/>
        </Container>
    )
}
const Container = styled.div``;

export default App;