import { useEffect, useState } from 'react';
import FullPageTemplate from '../../Components/FullPageTemplate';
import { LoginContainer } from './styles';
import NumberOfParkingSpaces from '../../Components/NumberOfParkingSpaces';
import StatusBanner from '../../Components/StatusBanner';

interface LoginProps {
  id?: string;
  isAuthorized?: boolean;
}

const Login: React.FC<LoginProps> = () => {
  const [cardId, setCardId] = useState<string>();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    setCardId('1234567890');
    setIsAuthorized(true);
  }, []);

  const parkingInfo = {
    numberOfParkingSpaces: 3,
    nearestFreeSlot: 1
  };

  return (
    <FullPageTemplate>
      <LoginContainer>
        <img src="src\assets\smart-parking-logo.png" alt="Smart Parking Logo" />
        <NumberOfParkingSpaces
          numberOfParkingSpaces={parkingInfo.numberOfParkingSpaces}
        />
        <StatusBanner
          isAuthorized={isAuthorized}
          cardId={cardId}
          nearestFreeSlot={parkingInfo.nearestFreeSlot}
        />
      </LoginContainer>
    </FullPageTemplate>
  );
};

export default Login;
