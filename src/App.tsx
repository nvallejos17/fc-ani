import Polaroid from './components/Polaroid/Polaroid.component'
import Section from './components/Section/Section.component'
import Timer from './components/Timer/Timer.component'

const images = [
  {
    message: '(aunque a veces parezca que me estás ahorcando de tanto amor)',
    src: 'img/01_bariloche-min.jpg',
    title: 'Bariloche, Argentina',
  },
  {
    message: 'Compartiendo unas vacaciones improvisadas',
    src: 'img/02_mendoza-min.jpg',
    title: 'Mendoza, Argentina',
  },
  {
    message: 'Festejando momentos importantes',
    src: 'img/03_buenos_aires-min.jpg',
    title: 'Buenos Aires, Argentina',
  },
  {
    message: 'Uniendo la familia',
    src: 'img/04_bariloche-min.jpg',
    title: 'Bariloche, Argentina',
  },
  {
    message: 'Conociendo lugares nuevos',
    src: 'img/05_venecia-min.jpg',
    title: 'Venecia, Italia',
  },
  {
    message: '(en donde nunca nos falta la birra)',
    src: 'img/06_florencia-min.jpg',
    title: 'Florencia, Italia',
  },
  {
    message: 'Descubriendo lugares de fantasía',
    src: 'img/07_monterosso-min.jpg',
    title: 'Monterosso al Mare, Italia',
  },
  {
    message: 'Dando paseos nocturnos',
    src: 'img/08_roma-min.jpg',
    title: 'Roma, Italia',
  },
  {
    message: 'Y re-encontrándonos para sorprendernos',
    src: 'img/09_tulum-min.jpg',
    title: 'Tulum, México',
  },
  {
    message: 'Te amo para siempre',
    src: 'img/10_cancun-min.jpg',
    title: 'Cancún, México',
  },
]

const App = () => {
  return (
    <>
      <Section>
        <h2>¡Feliz cumpleaños, amor de mi vida!</h2>

        <p>
          Que la vida te siga regalando momentos para compartir con los que te
          amamos.
        </p>

        <i className="fa-solid fa-chevron-down" />
      </Section>

      <Section>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {images.map(({ message, src, title }, index) => {
            const isEven = index % 2 === 0
            const style = {
              transform: `rotateZ(${isEven ? '2deg' : '-2deg'})`,
            }

            return (
              <Polaroid
                message={message}
                src={src}
                style={style}
                title={title}
              />
            )
          })}
        </div>
      </Section>

      <Section style={{ minHeight: '100vh' }}>
        <h2>Nos vemos pronto</h2>
        <Timer targetDate={new Date('2023/04-02')} />
        <p>💚</p>
      </Section>
    </>
  )
}

export default App
