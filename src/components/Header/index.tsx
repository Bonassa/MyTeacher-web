
import { Container, Logo, Title } from './styles';

export function Header(){
  return (
    <Container>
      <div>
        <Logo src='/images/myteacher.png' />
      </div>

      <Title>Encontre o professor perfeito para você!</Title>
    </Container>
  )
}