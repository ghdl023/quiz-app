import '../style/Header.css';
import ContainerStyles from './CommonStyles/ContainerStyles'
import BannerStyles from './CommonStyles/BannerStyles'
import styled from 'styled-components'

const HeaderStyle  = styled.div`
    position: relative;
    z-index: 1;
`

function Header() {
    return <ContainerStyles>
        <HeaderStyle className="container-inner">
            <BannerStyles>
                <div className="banner-lg">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-lg">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
            </BannerStyles>
        </HeaderStyle>
    </ContainerStyles>;
}

export default Header;