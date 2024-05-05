import { TextBox } from '../../Pages/Login/styles';

interface StatusBannerProps {
  isAuthorized: boolean;
  cardId?: string;
  nearestFreeSlot?: number;
}

const StatusBanner: React.FC<StatusBannerProps> = ({
  isAuthorized,
  cardId,
  nearestFreeSlot
}) => {
  return (
    <TextBox>
      <h1>Por favor, aproxime o seu cartão do leitor...</h1>
      {!!cardId && !isAuthorized && (
        <div className="unauthorized">
          <h2>{`Cartão de ID ${cardId} não autorizado`}</h2>
          <p>Por favor, tente novamente ou entre em contato com a central.</p>
        </div>
      )}
      {!!cardId && isAuthorized && (
        <>
          <div className="authorized">
            <h2>Cartão autorizado</h2>
            <span>
              <p>Siga até a</p>
              <p className="bold">vaga mais próxima</p>
            </span>
            <p className="number">{nearestFreeSlot}</p>
          </div>
        </>
      )}
    </TextBox>
  );
};

export default StatusBanner;
