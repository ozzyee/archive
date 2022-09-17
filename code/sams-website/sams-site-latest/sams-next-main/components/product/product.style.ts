import styled from "styled-components";

export const Div = styled("div")`
  width: 120px;

  display: inline-block;
  // // Small devices (landscape phones, 576px and up)
  @media (min-width: 320px) {
    width: 180px;
    padding-bottom: 12px;
  }

  // // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 180px;
  }

  // // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: 200px;
    text-align: center;
  }

  p {
    text-align: center;
    width: 100%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .text {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: -2px ;
    margin-top: -8px;
  }
`;

export const ProductDiv = styled("div")`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  p{
    width: 80%;
    margin: 0;
    color: white;
  }
`;

export const PriceDiv = styled("div")`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  p{
    width: 80%;
    margin: 0;
    color: white;

  }
`;


//Product
