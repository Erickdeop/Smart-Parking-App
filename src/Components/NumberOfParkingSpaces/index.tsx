import { ParkingSpacesContainer } from './styles';

interface NumberOfParkingSpacesProps {
  numberOfParkingSpaces: number;
}

const NumberOfParkingSpaces: React.FC<NumberOfParkingSpacesProps> = ({
  numberOfParkingSpaces
}) => {
  return (
    <ParkingSpacesContainer>
      <h2>Vagas disponíveis</h2>
      <h1 className="number">{numberOfParkingSpaces}</h1>
    </ParkingSpacesContainer>
  );
};

export default NumberOfParkingSpaces;
