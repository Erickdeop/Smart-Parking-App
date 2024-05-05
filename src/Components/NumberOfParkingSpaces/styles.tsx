import styled from 'styled-components';

export const ParkingSpacesContainer = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  padding: 16px;
  background-color: #313131;
  border-radius: 8px;
  border: 3px solid #fecd01;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  max-width: 200px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 90px;
  }
  h2 {
    margin: 0;
    font-size: 32px;
  }
  .number {
    font-size: 90px;
  }

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
    right: 0;

    width: 40vh;
    max-width: 100%;
  }
`;
