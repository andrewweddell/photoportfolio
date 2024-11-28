import styled from "styled-components";

const HeroContainer = styled.section`
  height: 65vh; /* Set height to half the viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff; /* White background */
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: #333;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const Button = styled.a`
  padding: 10px 20px;
  border: 2px solid #333;
  border-radius: 25px;
  text-decoration: none;
  color: #333;
  font-weight: light;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #333;
    color: #ffffff;
  }
`;

const ArrowDown = styled.span`
  font-size: 1rem;
`;

const Hero = () => (
  <HeroContainer>
    <Name>Andrew Weddell</Name>
    <Subtitle>Photo Portfolio</Subtitle>
    <Button href="#gallery">
      <ArrowDown>▼</ArrowDown> My Work
    </Button>
  </HeroContainer>
);

export default Hero;
