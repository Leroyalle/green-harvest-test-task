import {
  About,
  Container,
  Header,
  PrimaryBlock,
  Guide,
  Discount,
  Vegetables,
  Reviews,
  Feedback,
  Footer,
} from '../components';

export const Home = () => {
  return (
    <Container>
      <PrimaryBlock>
        <Header className="p-5 mb-12" />
        <About />
      </PrimaryBlock>
      <main>
        <h1 className="sr-only">Vegetables store</h1>
        <Guide />
        <Discount />
        <Vegetables />
        <Reviews />
        <Feedback />
      </main>
      <Footer />
    </Container>
  );
};
