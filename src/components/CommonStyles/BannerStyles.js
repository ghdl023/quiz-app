import styled from "styled-components"

const BannerStyles = styled.div`    
    overflow: auto;
    
    div {    
        float: left;
        width: 100%;
        background: antiquewhite;
        box-sizing: border-box;
        &.banner-md {        
            width: 320px;
            height: 50px;
            line-height: 50px;
        }
        
        &.banner-lg {
            width: 320px;
            height: 100px;
            line-height: 100px;
        }
    }    
`;

export default BannerStyles;
