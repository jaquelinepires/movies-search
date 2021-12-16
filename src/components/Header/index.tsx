import { Link } from 'react-router-dom'
import { Container } from './styles'

const Header = () => {
  return (
    <>
   <Container>
     <Link className="home"to='/'>
      <h1>Movies</h1>
     </Link>
    </Container>
    </>
  )
}

export default Header