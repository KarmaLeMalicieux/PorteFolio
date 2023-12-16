import './App.css'
import Social from './components/Social'
import BackgroundImage from './images/imageBackground.svg'
import Quote_Upper from './images/Quote_Upper.svg'
import Quote_Down from './images/Quote_Down.svg'
import Section from './images/Section.svg'
import Particles from './components/Particles'
import Transition_Sound from './transition/sound.wav'
import { Howl } from 'howler'
import data from '../project_data.json'
import Languages from './components/Languages'
import Card from './components/Card'


function App() {
  const soundEffect = new Howl({

    src: [Transition_Sound],
    volume: 0.2,
  })

  const handleSoundHover = () => {
    soundEffect.play()
  }

  return (
    <>
      <Particles />
      <Social />

      <div id='top_div'>
        <h1> Enchanté de vous rencontrer, <br />
          je suis <span id='underline' >Lucas Froment</span> </h1>
        <div id='intro'>
          <img src={Quote_Upper} alt="" id='quote_upper' />
          <p>
            Basé à Paris, je suis un développeur Fullstack <br />
            passioné les applications web & l'accessibilité
          </p>
          <img src={Quote_Down} alt="" id='quote_lower' />
          <button id='contact_button' onClick={handleSoundHover} > Contactez - moi </button>
        </div>
        <img src={BackgroundImage} alt="" className='background_image' />
      </div>
      <section id='section_graph'>
        <img src={Section} alt="" id='Top_Section' />
      </section>
      <section id='section_languages'>
        {data.languages.map((language, index) => {
          return <Languages key={index} data={language} />
        })}
      </section>
      <section id='section_graph'>
        <img src={Section} alt="" id='Top_Section' />
      </section>
      <section id='section_projects'>
        {data.projects.map((project, index) => {
          return (
            < Card key={index} data={project} />
          )
        })}
      </section>
      <footer>
        <h1 id='footer_title'> Contact </h1>
        <div id='footer'>
          <div id='paraph'>
            <p>
              J'aimerais bien connaître et savoir comment je <br />
              pourrais vous aider. Remplissez le formulaire et je vous <br />
              répondrai dès que possible dans les plus brefs délais. <br />
            </p>
          </div>
          <form action="">
            <input type="text" placeholder='NAME*' required /> <br />
            <input type="email" placeholder='EMAIL*' required /> <br />
            <textarea placeholder='MESSAGE*' required /> <br />
            <button type="submit"> Envoyer </button> <br />
          </form>
        </div>
      </footer>
      <section id='section_graph'>
        <img src={Section} alt="" id='Top_Section' />
      </section>
      <Social />

    </>
  )
}

export default App
