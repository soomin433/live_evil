import styled from 'styled-components';
import {BiMenu} from "react-icons/bi";
import {BiSearch} from "react-icons/bi";
import {BiShoppingBag} from "react-icons/bi";
import {BiUser} from "react-icons/bi";
import {DefaultButton} from "./Button.styled";

function Header() {
    return (
        <Container>
            <LeftItem>
                <Button>
                    <BiMenu/>
                </Button>
                <Logo>
                    <LogoLink>
                        <img src="img/logo.png" alt=""/>
                    </LogoLink>
                </Logo>
            </LeftItem>
            <RightItem>
                <Nav>
                    <NavItem>
                        <NavLink>진행중</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>베스트</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>브랜드</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>캘린더</NavLink>
                    </NavItem>
                    <NavItem>
                        <Button>
                            <BiSearch/>
                        </Button>
                    </NavItem>
                    <NavItem>
                        <Button>
                            <BiShoppingBag/>
                        </Button>
                    </NavItem>
                    <NavItem>
                        <Button>
                            <BiUser/>
                        </Button>
                    </NavItem>
                </Nav>
            </RightItem>
        </Container>
    )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #000;
`;
const LeftItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  Button{
    border-right: 1px solid #000;
  }
`;
const RightItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.span`
    margin-left: 20px;
`;
const LogoLink = styled.a`
  height: 70px;
  display:flex;
  justify-content: center;
  align-items: center;
  
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavItem = styled.div`
  
`;
const NavLink = styled.a`
  border-right: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  cursor: pointer;
  height: 70px;
  &:hover{
    background: #000;
    color: #fff;
  }
`;
const Button = styled(DefaultButton)`
    font-size: 24px;
    cursor:pointer;
    padding: 0 20px;
    height: 70px;
    border-radius: 0;
`;

export default Header;