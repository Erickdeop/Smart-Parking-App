import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 72px 0;
  max-width: 75vw;
  gap: 5vh;

  img {
    max-width: 40vh;
  }

  .unauthorized {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px;
    border-radius: 8px;
    border: 3px solid white;
    background-color: rgba(255, 0, 0, 0.7);
    width: 100%;
  }
  .authorized {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px;
    border-radius: 8px;
    border: 3px solid white;
    background-color: rgba(0, 255, 0, 0.7);
    width: 100%;
  }

  h1,
  h2,
  p {
    margin: 0;
  }
  h1 {
    font-size: 36px;
    font-weight: 700;
  }
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
  }
  span {
    display: flex;
    gap: 8px;
    align-items: center;
    font-weight: 700;
    line-height: 1;
  }
  .bold {
    font-weight: 700;
  }

  .number {
    margin: 0;
    line-height: 0.75;
    font-size: 100px;
    font-weight: 700;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px;
  gap: 16px;
  border-radius: 8px;
  border: 3px solid #fecd01;
  background-color: #313131;
  text-align: center;
`;
