import styled from "styled-components";

export const ButtonCard = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonLogin = styled.button`
  @media only screen and (max-width: 382px) {
    font-size: 13px;
    padding: 12px 28px;
  }
  background-color: #f3f3f3;
  border: 1px solid #cacecb;
  border-radius: 30px;
  padding: 14px 39px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #50524d;
  transition: transform 250ms, background-color 250ms;
  &:hover,
  &:focus {
    transform: scale(1.01);
    background-color: #fbfbfb;
  }
`;

export const ButtonRegister = styled.button`
  @media only screen and (max-width: 382px) {
    font-size: 13px;
    padding: 12px 28px;
  }
  background-color: #54be96;
  border-radius: 30px;
  padding: 14px 39px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  border: none;
  transition: transform 250ms, background-color 250ms;
  &:hover,
  &:focus {
    transform: scale(1.01);
    background-color: #36a379;
  }
`;