import styled from "styled-components";

export const Mainroot = styled.div`
  width: 85%;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Imgblkmain = styled.div``;
export const DivObj = styled.div``;

export const ImgLayout = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;

export const ImgsubLayout = styled.div`
  display: flex;
  flex-direction: row;
`;
