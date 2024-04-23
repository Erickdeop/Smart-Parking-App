import FullPageTemplate from '../../Components/FullPageTemplate';
import { LoginContainer } from './styles';

const Login: React.FC = () => {
  return (
    <FullPageTemplate>
      <LoginContainer>
        <img src="src\assets\smart-parking-logo.png" alt="Smart Parking Logo" />
      </LoginContainer>
    </FullPageTemplate>
  );
};

export default Login;
