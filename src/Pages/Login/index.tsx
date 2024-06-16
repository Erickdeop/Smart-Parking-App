import { useEffect, useState } from 'react';
import FullPageTemplate from '../../Components/FullPageTemplate';
import { LoginContainer } from './styles';
import NumberOfParkingSpaces from '../../Components/NumberOfParkingSpaces';
import StatusBanner from '../../Components/StatusBanner';
import useFileReader from '../../Hooks/useFileReader';

interface ParkingInfo {
  id?: string;
  autorizado?: number;
  vagaMaisProxima: number;
  numeroVagasDisponiveis: number;
}

const Login: React.FC = () => {
  const parkingInfo: ParkingInfo = useFileReader(2000);

  return (
    <FullPageTemplate>
      <LoginContainer>
        <img src="src\assets\smart-parking-logo.png" alt="Smart Parking Logo" />
        <NumberOfParkingSpaces
          numberOfParkingSpaces={parkingInfo?.numeroVagasDisponiveis}
        />
        <StatusBanner
          isAuthorized={parkingInfo?.autorizado}
          cardId={parkingInfo?.id}
          nearestFreeSlot={parkingInfo?.vagaMaisProxima}
        />
      </LoginContainer>
    </FullPageTemplate>
  );
};

export default Login;
