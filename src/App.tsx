import { useState } from 'react'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './Containers/ListaVagas'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import EstiloGlobal, { Container } from './styles'
import { ThemeProvider } from 'styled-components'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)
  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Header />
      <Hero trocaTema={trocaTema} />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
