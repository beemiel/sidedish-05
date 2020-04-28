import React from "react";
import styled from "@emotion/styled";
import headerData from "./headerData";

const LocalNaviBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 36px;
  width: 980px;
  margin: 0 auto;
`;

const Navigation = styled.div`
  padding: 10px 10px 9px 10px;
  height: 17px;
  font-size: 12px;
  color: #666;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    color: #6fd9d6;
    font-weight: 600;
  }
  & + & {
    border-left: 1px solid #e9e9e9;
  }
`;

const LocalNaviBar = () => {
  return (
    <LocalNaviBarContainer>
      {headerData.map((header, index) => (
        <Navigation key={index}>{header.name}</Navigation>
      ))}
    </LocalNaviBarContainer>
  );
};

export default LocalNaviBar;