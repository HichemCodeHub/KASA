import ImgBannerAbout from '../../assets/banner/aboutBanner.png';


function BannerAbout() {

    return (
        <div className="banner">

            <img src={ImgBannerAbout} alt="Bannière d'accueil" className="banner__img" />

            <div className="banner__background"></div>

        </div>
    );
};

export default BannerAbout;