import { GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { Gif } from '@giphy/react-components';
import { useAsync } from 'react-async-hook';

const giphyFetch = new GiphyFetch('6sPohQWdItR2MgaWgyRNN1MZQhMWuPyI');

type IGifImageProps = {
  handleGifChange: (data: IGif) => {};
  gif: IGif;
};

const GifImage = (props: IGifImageProps) => {
  const handleRandomGifGeneration = async () => {
    const { data } = await giphyFetch.random({
      tag: 'excited',
      type: 'gifs',
    });

    props.handleGifChange(data);
  };

  useAsync(async () => {
    handleRandomGifGeneration();
  }, []);

  return props.gif && <Gif gif={props.gif} width={400} noLink={true} />;
};

export { GifImage };
