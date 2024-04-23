import { BackgroundImg, FullPageContainer } from './styles';

interface FullPageTemplateProps extends React.PropsWithChildren {}

const FullPageTemplate: React.FC<FullPageTemplateProps> = ({ children }) => {
  return <FullPageContainer>{children}</FullPageContainer>;
};

export default FullPageTemplate;
