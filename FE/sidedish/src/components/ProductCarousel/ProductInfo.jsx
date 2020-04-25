import React from "react";
import styled from "@emotion/styled";

const Container = styled.dl`
  padding: 16px 10px 12px 10px;
  text-align: center;
`;

const ProductTitle = styled.dt``;

const ProductDescription = styled.dd``;

const ProductPrice = styled.dd``;

const SellingPrice = styled.p`
  font-size: 26px;
  color: #2ac1bc;
  font-weight: bold;
  vertical-align: middle;
  line-height: 1;
  letter-spacing: -0.04em;
  margin-right: 5px;
  &::after {
    content: "원";
    font-size: 20px;
  }
`;

const OriginPrice = styled.p`
  position: relative;
  top: 2px;
  font-size: 14px;
  color: #888;
  font-weight: normal;
  vertical-align: middle;
  text-decoration: line-through;
`;

const ProductInfo = ({ infodata }) => {
  const { title, description, n_price, s_price } = infodata;

  return (
    <Container>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>
        <OriginPrice>{s_price ? n_price : ""}</OriginPrice>
        <SellingPrice>{s_price ? s_price : n_price}</SellingPrice>
      </ProductPrice>
    </Container>
  );
};

export default ProductInfo;
