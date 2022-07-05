import { useState } from 'react';

import { GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { Gif } from '@giphy/react-components';
import { useAsync } from 'react-async-hook';

const giphyFetch = new GiphyFetch('6sPohQWdItR2MgaWgyRNN1MZQhMWuPyI');

const GifImage = () => {
  const [gif, setGif] = useState<IGif | null>(null);

  const handleRandomGifGeneration = async () => {
    const { data } = await giphyFetch.random({
      tag: 'excited',
      type: 'gifs',
    });
    setGif(data);
  };

  useAsync(async () => {
    handleRandomGifGeneration();
  }, []);

  return gif && <Gif gif={gif} width={400} noLink={true} />;
};

export { GifImage };
