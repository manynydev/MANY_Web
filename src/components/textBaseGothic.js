import styled from 'styled-components';

const TextBaseGothic = styled.text`
{
  font-size: ${props => props.fontSize ? props.fontSize : '24px'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
  text-transform: initial;
  margin-top: 5px;
  font-family: MSGothicThesis, sans-serif;
  color: #151515;
  justify-content: center;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
`

export default TextBaseGothic
