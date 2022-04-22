import './style/App.css';
import Header from "./components/Header";
import Center from "./components/Center";
import Bottom from "./components/Bottom";
import styled from "styled-components"

const WrapStyle = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    margin: auto;
    font-size: 1.4rem
`

function App() {
    return (
        <WrapStyle>
            {/*<Header/>*/}
            <Center/>
            {/*<Bottom/>*/}
        </WrapStyle>
    );
}

export default App;
