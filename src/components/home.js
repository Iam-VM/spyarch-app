import HomesStyles from './home.module.css';
import {Link} from "react-router-dom";
import GuideLines from "./guidelines";

function Home() {
    return (
        <div className={HomesStyles.home}>
            <div className={HomesStyles.homeHead}>
                <div className={HomesStyles.topLogoContainer}>
                    <img src="/ieee-w.png" alt="IEEE LOGO" className={HomesStyles.logoImage}/>
                    <img src="/sb-w.png" alt="IEEE LOGO" className={HomesStyles.logoImage}/>
                    <img src="/ieeecsgecp-b.png" alt="IEEE LOGO" className={HomesStyles.logoImage}/>
                </div>
                <div className={HomesStyles.homeHeadingContainer}>
                    <div className={HomesStyles.homeHeading}>WebSketch</div>
                    <div className={HomesStyles.linksContainer}>
                        {/*<Link to={'/guidelines'} className={`${HomesStyles.linkButton} link`}>Guidelines</Link>*/}
                    </div>
                </div>
            </div>
            <div className={HomesStyles.homeQuotesContainer}>
                <div className={`${HomesStyles.quotes}`}>
                    Nothing is here, this is just our home page
                </div>
            </div>
        </div>
    );
}

export default Home;
