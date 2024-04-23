import { BackgroundImgContainer } from './styles';

interface BackgroundImgProps extends React.PropsWithChildren {
  src: string;
}
const BackgroundImg: React.FC<BackgroundImgProps> = ({ src, children }) => {
  return <BackgroundImgContainer src={src}>{children}</BackgroundImgContainer>;
};

export default BackgroundImg;
