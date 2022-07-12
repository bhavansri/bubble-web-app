import { IGif } from '@giphy/js-types';
import { Gif } from '@giphy/react-components';

type IGifImageProps = {
  gif: IGif;
};

const GifImage = (props: IGifImageProps) => {
  return (
    <Gif
      gif={props.gif}
      width={350}
      height={200}
      noLink={true}
      className="my-5"
    />
  );
};

export { GifImage };
