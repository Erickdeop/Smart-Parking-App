import { useEffect, useState } from 'react';
import FullPageTemplate from '../../Components/FullPageTemplate';
import { LoginContainer, TextBox } from './styles';

interface LoginProps {
  id?: string;
  isAuthorized?: boolean;
}

const Login: React.FC = () => {
  const [cardId, setCardId] = useState<string>();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    setCardId('1234567890');
    setIsAuthorized(false);
  }, []);

  return (
    <FullPageTemplate>
      <LoginContainer>
        <img src="src\assets\smart-parking-logo.png" alt="Smart Parking Logo" />
        <TextBox>
          <h1>Por favor, aproxime o seu cartão do leitor...</h1>
          {!!cardId && !isAuthorized && (
            <div className="unauthorized">
              <h2>{`Cartão de ID ${cardId} não autorizado`}</h2>
              <p>
                {
                  'Por favor, tente novamente ou entre em contato com a central.'
                }
              </p>
            </div>
          )}
          {!!cardId && isAuthorized && (
            <div className="authorized">
              <h2>{'Cartão autorizado'}</h2>
              <p>{'Siga até a vaga mais próxima'}</p>
            </div>
          )}
        </TextBox>
      </LoginContainer>
    </FullPageTemplate>
  );
};

export default Login;
