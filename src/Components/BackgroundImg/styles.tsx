import styled from 'styled-components';

export const BackgroundImgContainer = styled.div<{ src: string }>`
  background-image: linear-gradient(rgba(58, 58, 58, 0.7), rgba(3, 3, 3, 0.7)),
    url(${(props) => props.src});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
