import styled from 'styled-components';

const MainContainer = styled.div`
{
  z-index: auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems ?? 'center' };
  justify-content: ${props => props.justifyContent?? 'center' };
  background-color: ${props => props.color? props.color : '#eaeaea'}; 
  position: fixed;
  margin:auto;
  overflow-y: ${props => props.overflowY ?? 'hidden' };
  overflow-x: ${props => props.overflowX ?? 'hidden' };
}
`
export default MainContainer;
