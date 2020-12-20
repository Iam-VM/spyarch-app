import GuideLinesStyles from './guidelines.module.css';
import HomeStyles from "./home.module.css";

const GuideLines = () => {
    return (
        <div className={GuideLinesStyles.container}>
            <div className={GuideLinesStyles.headContainer}>
                <div className={GuideLinesStyles.header}>
                    <div className={`${HomeStyles.homeHeading} ${GuideLinesStyles.miniMainHead}`}>WebSketch</div>
                    <div className={GuideLinesStyles.subHead}>GUIDELINES</div>
                </div>
            </div>
            <div className={GuideLinesStyles.plankContainer}>
                <div className={GuideLinesStyles.ruleSetContainer}>
                    <div className={GuideLinesStyles.ruleHead}>General Rules</div>
                    <div className={GuideLinesStyles.ruleText}>Any one member of each team should be registered through the registration form provided before attempting to enter the contest.</div>
                    <div className={GuideLinesStyles.ruleText}>Individual participation is allowed and participant should be registered through the provided registration form.</div>
                    <div className={GuideLinesStyles.ruleText}>Accusation of usage of code from any existing websites or webpage templates with or without the consent of its original author will make the participants eligible for disqualification.</div>
                    <div className={GuideLinesStyles.ruleText}> Entry should be submitted within the given time.</div>
                    <div className={GuideLinesStyles.ruleText}>Contest organizers' decision will be final.</div>
                </div>
                <div className={GuideLinesStyles.ruleSetContainer}>
                    <div className={GuideLinesStyles.ruleHead}>Technical Rules</div>
                    <div className={GuideLinesStyles.ruleText}>HTML5, CSS (or CSS Frameworks), JS, Jquery, React (or React based frameworks), Angular, Blazor are allowed.</div>
                    <div className={GuideLinesStyles.ruleText}>Usage of Wordpress or any drag and drop web development tools (Example: wix.com) are not allowed.</div>
                    <div className={GuideLinesStyles.ruleText}>All the provided resources (Example: image files) and text contents (if any) must be used in the website.</div>
                    <div className={GuideLinesStyles.ruleText}>Dummy texts are allowed to use whenever felt applicable.</div>
                </div>
                <div className={GuideLinesStyles.ruleSetContainer}>
                    <div className={GuideLinesStyles.ruleHead}>Design Rules</div>
                    <div className={GuideLinesStyles.ruleText}>Entry must be resposive to atleast Laptop, tablet and mobile screens.</div>
                </div>
            </div>
        </div>
    );
}

export default GuideLines;
