import styled from 'styled-components';
import {DefaultButton} from "./Button.styled";
import {BiShoppingBag} from "react-icons/bi";
import {BiHeart} from "react-icons/bi";
import {BsPlay} from "react-icons/bs";

function Sale() {
    return (
        <Container>
            <SaleWrap>
                <SaleItem>
                    <h2>HOLYDAY
                        30% OFF
                    </h2>
                    <TopCon>
                        <img src="img/ddd.jpg" alt=""/>
                        <IconWrap>
                            <Button>
                                <BiShoppingBag/>
                            </Button>
                            <Button>
                                <BiHeart/>
                            </Button>
                        </IconWrap>
                    </TopCon>
                    <BottomCon>
                        <IconWrap2>
                            <Button><BsPlay/></Button>
                            <p>10만</p>
                            <Button><BiHeart/></Button>
                            <p>5.2만</p>
                        </IconWrap2>
                        <h3>연휴를 위한 준비 단 7일간 최대 30% 세일</h3>
                        <TagWrap>
                            <p>#아다디스</p>
                            <p>#나이크</p>
                            <p>#마르지올라</p>
                            <p>#디옴</p>
                        </TagWrap>
                    </BottomCon>
                </SaleItem>
                <SaleItem>
                    <h2>HOLYDAY
                        30% OFF
                    </h2>
                    <TopCon>
                        <img src="img/ddd.jpg" alt=""/>
                        <IconWrap>
                            <Button>
                                <BiShoppingBag/>
                            </Button>
                            <Button>
                                <BiHeart/>
                            </Button>
                        </IconWrap>
                    </TopCon>
                    <BottomCon>
                        <IconWrap2>
                            <Button><BsPlay/></Button>
                            <p>10만</p>
                            <Button><BiHeart/></Button>
                            <p>5.2만</p>
                        </IconWrap2>
                        <h3>연휴를 위한 준비 단 7일간 최대 30% 세일</h3>
                        <TagWrap>
                            <p>#아다디스</p>
                            <p>#나이크</p>
                            <p>#마르지올라</p>
                            <p>#디옴</p>
                        </TagWrap>
                    </BottomCon>
                </SaleItem>
                <SaleItem>
                    <h2>HOLYDAY
                        30% OFF
                    </h2>
                    <TopCon>
                        <img src="img/ddd.jpg" alt=""/>
                        <IconWrap>
                            <Button>
                                <BiShoppingBag/>
                            </Button>
                            <Button>
                                <BiHeart/>
                            </Button>
                        </IconWrap>
                    </TopCon>
                    <BottomCon>
                        <IconWrap2>
                            <Button><BsPlay/></Button>
                            <p>10만</p>
                            <Button><BiHeart/></Button>
                            <p>5.2만</p>
                        </IconWrap2>
                        <h3>연휴를 위한 준비 단 7일간 최대 30% 세일</h3>
                        <TagWrap>
                            <p>#아다디스</p>
                            <p>#나이크</p>
                            <p>#마르지올라</p>
                            <p>#디옴</p>
                        </TagWrap>
                    </BottomCon>
                </SaleItem>
                <SaleItem>
                    <h2>HOLYDAY
                        30% OFF
                    </h2>
                    <TopCon>
                        <img src="img/ddd.jpg" alt=""/>
                        <IconWrap>
                            <Button>
                                <BiShoppingBag/>
                            </Button>
                            <Button>
                                <BiHeart/>
                            </Button>
                        </IconWrap>
                    </TopCon>
                    <BottomCon>
                        <IconWrap2>
                            <Button><BsPlay/></Button>
                            <p>10만</p>
                            <Button><BiHeart/></Button>
                            <p>5.2만</p>
                        </IconWrap2>
                        <h3>연휴를 위한 준비 단 7일간 최대 30% 세일</h3>
                        <TagWrap>
                            <p>#아다디스</p>
                            <p>#나이크</p>
                            <p>#마르지올라</p>
                            <p>#디옴</p>
                        </TagWrap>
                    </BottomCon>
                </SaleItem>
            </SaleWrap>
        </Container>
    )
}
const Container = styled.div`
  width: 1248px;
  margin: 0 auto;
`;
const SaleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 63px;
`;
const SaleItem = styled.div`
    position: relative;
    h2{
      position: absolute;
      top: 0;
      right: 0;
      font-size: 30px;
      font-weight: 800;
      width: 130px;
    }
`;

const TopCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  max-width: 320px;
  padding-top: 29px;
  img{
    width: 240px;
  }
`;
const IconWrap = styled.div`
`;
const IconWrap2 = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  color: #797979;
  margin-top: 10px;
  Button{
    font-size: 18px;
    color: #797979;
  }
`;
const Button = styled(DefaultButton)`
    font-size: 24px;
    cursor:pointer;
`;
const BottomCon = styled.div`
  h3{
    font-size: 18px;
    font-weight: 800;
    width: 260px;
    line-height: 1.2;
    margin-top: 6px;
  }
`;
const TagWrap = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  p{
    padding-right: 4px;
  }
`;
export default Sale;