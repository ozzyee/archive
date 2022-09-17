import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.playlist__map {
    display: flex;
    padding: 0 9px;
    max-width: 1024px;
  }
  .padding {
    float: left;
    padding: 18px 9px;
    width: calc(25% - 24px);
  }

  .play__hover {
    color: #a5e65a;
    position: absolute;
    display: flex;
    margin-left: 130px;
    margin-top: 130px;
    border-radius: 50%;
    box-shadow: 5px;
    opacity: 0;
    z-index: 2;
    transition: opacity 200ms;
  }

  .play__hover__playlist{
    color: #a5e65a;
    position: absolute;
    display: flex;
    margin-left: 134px;
    margin-top: 134px;
    border-radius: 50%;
    box-shadow: 5px;
    opacity: 0;
    z-index: 2;
    transition: opacity 200ms;
  }

  .play__hover__album{
    color: #a5e65a;
    position: absolute;
    display: flex;
    margin-left: 140px;
    margin-top: 140px;
    border-radius: 50%;
    box-shadow: 5px;
    opacity: 0;
    z-index: 2;
    transition: opacity 200ms;
  }

  .following__box {
    padding: 18px;
    border-radius: 2%;
    background-color: #181818;
    transition: background-color 200ms;
    cursor: pointer;
    height: 260px;

    &:hover {
      background-color: #282828;

      .play__hover {
        opacity: 1;
      }
      .play__hover__playlist{
        opacity: 1;
      }

      .play__hover__album{
        opacity: 1;
      }
    }
  }

  .image__holder {
    border-radius: 5px;
    position:relative;
    width: 100%;
    padding-bottom: 100%;
    margin-bottom: 5px;
    object-fit: contain;
    /* img{
    border-radius: 5px;
    } */
  }

  .follow__text {
    padding: 5px;
    font-family: "Montserrat", sans-serif;
    color: white;
    overflow: hidden;
  }

  .album__text{
    padding: 5px;
    font-family: "Montserrat", sans-serif;
    color: white;
    overflow: hidden;
    margin-top: -106px;
    
  }

  .playlist__text{
    padding: 5px;
    font-family: "Montserrat", sans-serif;
    color: white;
    overflow: hidden;
    margin-top: -186px;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: normal;
    text-transform: none;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    margin-top: 4px;
    font-size: 14px;
  }
  .playlist__cover {
    width: 100%;
    border-radius: 5px;
  }
  .artist__cover{
    width: 100%;
    border-radius: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 0;
    object-fit: cover;

  }
  .playlist__public {
  }
  .title__text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    display: inline-block;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    margin-top: 10px;
    /* padding: 20px; */
  }

  .title {
    padding: 20px;
    padding-top: 30px;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    -webkit-letter-spacing: -0.04em;
    -moz-letter-spacing: -0.04em;
    -ms-letter-spacing: -0.04em;
    letter-spacing: -0.04em;
    text-transform: none;
    font-family: "Montserrat",sans-serif;
    color: white;
    padding: 20px;
    margin-left: 23px;

  }
  

  .padding-left-more{
    padding-left:20px;
  }
  
`;

export default GlobalStyle;
