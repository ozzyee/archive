import styled from "styled-components";

export const SkeletonLoaderDiv = styled("div")`
  /* width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height}; */

  .details span {
    display: block;
    background: #d9d9d9;
    border-radius: ${(props) => props.theme.borderRadius};
    overflow: hidden;
    position: relative;
  }

  .details .about {
    height: ${(props) => props.theme.height};
    width: ${(props) => props.theme.width};
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .header .details span::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #d9d9d9 0%,
      rgba(0, 0, 0, 0.05) 20%,
      #d9d9d9 40%,
      #d9d9d9 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    animation: shimmer 1s linear infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -450px 0;
    }
    100% {
      background-position: 450px 0;
    }
  }
`;
