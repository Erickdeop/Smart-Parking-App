import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 72px 0;
  max-width: 75vw;
  gap: 10vh;

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
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 32px;
  }
  p {
    font-size: 24px;
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
  border: 3px solid #ffcb00;
  background-color: #313131;
`;
