import Button from "../../components/Button";
import styled from "styled-components";
//
const HomeFooter = () => {
  return (
    <Container>
      <H2>The #1 Place to Learn How to</H2>
      <H2Color>Make Money Online</H2Color>
      <H4>
        originating from Japan. Anime, a term derived from the English word
        animation, is used in Japanese to describe all animation, regardless of
        style
      </H4>
      <Button title="Sign Up Now"></Button>
    </Container>
  );
};

export default HomeFooter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10%;
  background-image: url("/mountainsAbstract.png");
  background-size: contain;
`;
const H2 = styled.h2`
  color: var(--secondary-color-normal);
  line-height: initial;
  margin-bottom: 0;
  text-align: center;
`;
const H2Color = styled.h2`
  color: var(--primary-color-dark);
  margin-top: 0;
  text-align: center;
  margin-bottom: 0;
`;
const H4 = styled.h4`
  color: var(--secondary-color-light);
  text-align: center;
`;
