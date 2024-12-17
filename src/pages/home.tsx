import { About, Container, Header, PrimaryBlock, Guide, Discount, Vegetables } from '../components';

export const Home = () => {
  return (
    <Container>
      <PrimaryBlock>
        <Header className="p-5 mb-12" />
        <About />
      </PrimaryBlock>
      <Guide />
      <Discount />
      <Vegetables />
      <h1>Home</h1>
    </Container>
  );
};
