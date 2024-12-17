import {
  About,
  Container,
  Header,
  PrimaryBlock,
  Guide,
  Discount,
  Vegetables,
  Reviews,
} from '../components';

export const Home = () => {
  return (
    <Container>
      <h1 className="sr-only">Vegetables store</h1>
      <PrimaryBlock>
        <Header className="p-5 mb-12" />
        <About />
      </PrimaryBlock>
      <main>
        <Guide />
        <Discount />
        <Vegetables />
        <Reviews />
      </main>
    </Container>
  );
};
