import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import BlackLogo from "../assets/mom-logo-black-cropped.png"

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title src={BlackLogo} />
        </StyledLink>
        {/* <Description>{state.frontity.description}</Description> */}
        <MobileMenu />
      </Container>
      <Nav />
      <BookBtn>
        Book Now
      </BookBtn>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #101518;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.img`
  margin: 0;
  margin-bottom: 16px;
  height: auto;
  width: 400px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const BookBtn = styled.button`
  width: 150px;
  height: 
`