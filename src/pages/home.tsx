import { Container, Header, PrimaryBlock } from '../components';

export const Home = () => {
  return (
    <Container>
      <PrimaryBlock>
        <h2 className="sr-only">Heading</h2>
        <Header className="p-5" />
      </PrimaryBlock>
      <h1>Home</h1>
    </Container>
  );
};
