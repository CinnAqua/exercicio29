import { Container } from '../../styles'
import { BotaoTema, FHero, THero } from './styles'

type Props = {
  trocaTema: () => void
}

const Hero = (props: Props) => (
  <>
    <FHero>
      <Container>
        <THero>
          As melhores vagas para tecnologia, design e artes visuais.
        </THero>
      </Container>
    </FHero>
    <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
  </>
)

export default Hero
