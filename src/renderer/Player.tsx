import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Player = () => {
  const Remove = () => {
    //const download = $('[class="mejs__button mejs__logo-button"]');
    //console.log($('[class="mejs__button mejs__logo-button"]'));
  };

  useEffect(() => {
    //Remove();
  }, []);

  return (
    <div>
      <video
        controls
        src="magnet:?xt=urn:btih:945a012c70375ed7c08296e3215a506e221b2beb&dn=Fantastic+Beasts+And+Where+To+Find+Them+(2016)+%5B1080p%5D+%5BYTS.AG%5D&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337"
      />
      <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js"
          async
        ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
      </Helmet>
    </div>
  );
};

export default Player;
