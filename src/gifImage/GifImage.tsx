import { IGif } from '@giphy/js-types';
import { Gif } from '@giphy/react-components';

type IGifImageProps = {
  gif: IGif;
};

const GifImage = (props: IGifImageProps) => {
  return <Gif gif={props.gif} width={400} noLink={true} />;
};

export { GifImage };
