import '../style/Bottom.css';
import ContainerStyles from "./CommonStyles/ContainerStyles"
import BannerStyles from "./CommonStyles/BannerStyles"

function Bottom() {
    return <ContainerStyles>
        <div className="container-inner">
            <BannerStyles>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-lg">광고</div>
                <div className="banner-lg">광고</div>
                <div className="banner-md">광고</div>
                <div className="banner-md">광고</div>
            </BannerStyles>
        </div>
    </ContainerStyles>
}

export default Bottom;