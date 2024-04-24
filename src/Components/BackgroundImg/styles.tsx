import styled from 'styled-components';

export const BackgroundImgContainer = styled.div<{ src: string }>`
  background-image: linear-gradient(
      rgba(3, 3, 3, 0.8),
      rgba(108, 108, 108, 0.3)
    ),
    url(${(props) => props.src});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
