import gitHub from '../images/gitHub.svg'
import linkedin from '../images/Linkedin.svg'
import '../App.css'


function Social() {

    return (
        <>
            <div id='header'>
                <div>
                    <h2> Lucas Froment </h2>
                </div>

                <div id='social_logos'>
                    <a href="https://github.com/KarmaLeMalicieux" target='_blank'><img src={gitHub} alt="" /></a>
                    <a href="https://www.linkedin.com/in/lucas-froment/" target='_blank'><img src={linkedin} alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default Social;
