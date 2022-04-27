import styled from "styled-components"

const ContainerStyles = styled.div`    
    background: ${(props) => props.background || "#ffffff"};
    height:100%;
    div.container-inner {    
        max-width: 960px;
        width: 100%;
      height:100%;
        margin: auto;
    }
`;

export default ContainerStyles;
