import iphone from "../assets/images/iphone.png";
import styled from 'styled-components';
import React from "react";

const IphoneFrameStyled = styled.img`
{
  z-index: 0;
  margin: auto;
  position: absolute;
  max-height: 750px;
  min-height: 750px;
  -webkit-user-drag: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}`
{/*The iPhone frame is fixed to avoid resizing with the viewport. This limits accessibility and cross-device supportability.*/}
const IphoneFrame = () => {
    return <IphoneFrameStyled src={iphone}
                              alt={'iPhone frame'}/>
}

export default IphoneFrame



