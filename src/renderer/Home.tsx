import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  const Remove = () => {
    //const download = $('[class="mejs__button mejs__logo-button"]');
    //console.log($('[class="mejs__button mejs__logo-button"]'));
  };

  useEffect(() => {
    //Remove();
  }, []);

  return (
    <div>
      <link rel="stylesheet" href="/Movies" />
      <link rel="stylesheet" href="/TvShows" />
    </div>
  );
};

export default Home;
