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
    <Container className="relative">
      <PrimaryBlock>
        <Header className="mb-12 tablet:mb-[50px]" />
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
