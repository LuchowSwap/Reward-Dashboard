import styled from "styled-components";

export const MainHeaderContaner = styled.div`
    height: 100px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const MainHeader = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderLogoContainer = styled.div`
    padding-top: 10;
    display: flex;
    padding-right: 30px;
`;
export const HeaderLogoImg = styled.img`
    height: 50px;
    @media screen and (max-width: 600px) {
      & {
        display: none;
      }
    }
`;
export const HeaderMobileLogoImg = styled.img`
    height: 50px;
    display: none;
    @media screen and (max-width: 600px) {
      & {
        display: block;
      }
    }
`;
export const RightHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
`;
export const LanguageContrainer = styled.div`
    margin: 0 20px;
    border: 1px solid white;
    border-radius: 10px;
    width: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
`;
export const LanguageItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const DropDownLangs = styled.div`
    position: absolute;
    top: 37px;
    border: 1px solid white;
    width: 125px;
    border-top: none;
    padding-top: 12px;
    padding-bottom: 5px;
    background: black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;
export const DropDownItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    &:hover {
      background: gray;
    }
`;
export const DisBtn = styled.div`
    background: #ff0066;
    padding: 1% 3%;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;
export const BodySection = styled.div`
    background-image: url(/assets/background.png);
    background-size: cover;
    background-repeat: no-repeat;
`;
export const Section1 = styled.div`
    display: flex;
    justifyContent: space-between;
    align-items: center;
    @media screen and (max-width: 600px) {
      & {
        display: block;
      }
    }
`;
export const MintContainer = styled.div`
    display: flex;
    padding-top: 20px;
`;
export const MintCountContainer = styled.div`
    width: 70%;
    background: white;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    height: 50px;
    margin-right: 5px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0 10px;
`;
export const CountIcon = styled.span`
    font-size: 24px;
    padding: 1px 10px;
    cursor: pointer;
    color: black;
`;
export const MintBtnContainer = styled.div`
    width: 30%;
    margin-left: 5px;
    height: 50px;
    background: rgb(255, 0, 102);
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
export const HeaderTxt = styled.h1`
  margin: 80px auto 30px;
  text-align: center;
  font-size: 64px;
  letter-spacing: 2px;
`;
export const ImgBlk = styled.img`
  width: 100%;
  height: 100%;
  src: ${(props) => props.src};
`;
export const Header3Txt = styled.h3`
  font-size: 42px;
  // text-align: center;
  margin-block-start: 1em;
  margin-block-end: 1em;
`;
export const PTxt = styled.p`
  margin: 0px auto;
  font-size: 18px;
  line-height: 32px;
  // text-align: center;
  max-width: 800px;
`;
export const DivTopInput = styled.div`
  margin: 30px auto 0px;
  width: 100%;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
    & {
      flex-direction: column !important;
      width: 100% !important;
    }
  }
`;
export const DivInputContent = styled.div`
  font-size: 16px;
`;
export const DivTopBtn = styled.div`
  margin: 30px auto 0px;
  width: 100%;
`;
export const TextInput = styled.input`
  max-width: 50px;
  width: 50px;
  height: 25px;
  border: 0;
  color: black;
  &:focus {
    outline: none;
  }
`;
export const TopBtn = styled.button`
  margin: 0px auto;
  display: block;
  width: 400px;
  height: auto;
  outline: none;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    & {
      width: 100% !important;
    }
  }
`;

export const TopBtnP = styled.p`
  margin: 40px 0px;
  font-size: 24px;
  color: black;
`;

export const Header3Txt2 = styled.h3`
  font-size: 42px;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 60px;
`;

export const GifBlk = styled.img`
  width: 100%;
  margin: 0px auto;
  display: block;
  border-radius: 20px;
  src: ${(props) => props.src};
  @media screen and (max-width: 600px) {
    & {
      width: 100% !important;
    }
  }
`;

export const DivImgList = styled.div`
  width: calc(100% + 40px);
  margin: -20px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;

export const DivImgListItem = styled.div`
  padding: 20px;
`;

export const DivImgListItemImg = styled.img`
  width: 100%;
`;

export const DivImgListItemP1 = styled.p`
  font-size: 20px;
  margin: 5px auto 0px;
  word-break: break-word;
`;

export const DivImgListItemP2 = styled.p`
  margin: 5px auto 0px;
  color: rgb(193, 204, 220);
  font-size: 18px;
  word-break: break-word;
`;

export const DivFooter = styled.div`
  margin: 100px auto 0px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 960px) {
    & {
      flex-direction: column;
    }
  }
`;

export const DivFooterElem = styled.div`
  margin: 0px auto;
  max-width: 100%;
  @media screen and (max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;

export const DivFooterBtn = styled.button`
  margin: 0px auto 40px;
  display: block;
  width: 400px;
  height: auto;
  outline: none;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    & {
      width: 100% !important;
    }
  }
`;

export const DivFooterP = styled.p`
  margin: 40px 0px;
  font-size: 24px;
  color: black;
`;

export const DivPadding200 = styled.div`
  width: 100%;
  height: 200px;
`;
