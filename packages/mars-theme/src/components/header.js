import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import MomLogo from "../assets/logo-title-white.svg"
import BookNow from "../assets/book-btn-light.svg"

const Header = ({ state }) => {
  return (
    <Wrapper>
      <Container>
        <StyledLink link="/">
          <Title src={MomLogo}/>
        </StyledLink>
        {/* <Description>{state.frontity.description}</Description> */}
        <MobileMenu />
      </Container>
      <Container2>
        <Nav />
        <StyledLink link="/">
          <BookBtn src={BookNow}/>
        </StyledLink> 
      </Container2>
    </Wrapper>
    
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Wrapper = styled.div`
  display: flex;  
  width: 90%;
  //align-items: center;
  justify-content: space-between;
  padding: 24px;

    /* Media query for screens 1400px and wider */
  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
    
  }

  /* Adjust padding and other styles for smaller screens */
  @media (max-width: 1199px) {
    padding: 10px;
  }
`;

const Container = styled.div`
  width: fit-content;
  box-sizing: border-box;
  //padding: 24px;
  //display: flex;
  //flex-direction: column;
  //justify-content: space-around;
`;

const Container2 = styled.div`
  display: flex;  
  //flex-direction: row;
  align-items: center;
  margin-right: 0px;
`

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
  //height:auto;
  //width: 200px;
`;

const BookBtn = styled.img`
  width: 120px;
  height: auto;
`

