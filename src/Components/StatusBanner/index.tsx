import { TextBox } from '../../Pages/Login/styles';

interface StatusBannerProps {
  isAuthorized: number;
  cardId?: string;
  nearestFreeSlot?: number;
}

const StatusBanner: React.FC<StatusBannerProps> = ({
  isAuthorized,
  cardId,
  nearestFreeSlot
}) => {
  const isAuthorizedBoolean = isAuthorized === 1 ? true : false;
  return (
    <TextBox>
      <h1>Por favor, aproxime o seu cartão do leitor...</h1>
      {!!cardId && !isAuthorizedBoolean && (
        <div className="unauthorized">
          <h2>{`Cartão de ID ${cardId} não autorizado`}</h2>
          <p>Por favor, tente novamente ou entre em contato com a central.</p>
        </div>
      )}
      {!!cardId && isAuthorizedBoolean && (
        <>
          {nearestFreeSlot === -1 ? (
            <div className="unauthorized">
              <h2>{'Não há vagas disponíveis'}</h2>
              <p>
                Por favor, espere até que uma vaga seja liberada ou siga até
                outra unidade
              </p>
            </div>
          ) : (
            <div className="authorized">
              <h2>Cartão autorizado</h2>
              <span>
                <p>Siga até a</p>
                <p className="bold">vaga mais próxima</p>
              </span>
              <p className="number">{nearestFreeSlot}</p>
            </div>
          )}
        </>
      )}
    </TextBox>
  );
};

export default StatusBanner;
