import React from "react";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  const headContent = () => {
    return (
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>BornDead Studios</title>
        <meta name='description' content='Game Studio' />
        <meta name='keywords' content='game, developer, india, horror' />
        <meta name='author' content='Codrops' />
        <link rel='shortcut icon' href='favicon.ico' />
        {/* <link
          href='https://fonts.googleapis.com/css?family=IM+Fell+English|Playfair+Display:900'
          rel='stylesheet'
        /> */}
        <link rel='stylesheet' type='text/css' href='/css/base.css' />
        <link rel='stylesheet' type='text/css' href='/css/demo1.css' />
      </Head>
    );
  };

  const pageContent = () => {
    return (
      <div className='demo-1 loading'>
        <main>
          <div className='message'>
            Sorry, your browser does not support clip-path on HTML elements!
          </div>

          <div className='content'>
            <div className='glitch'>
              <div className='glitch__img' />
              <div className='glitch__img' />
              <div className='glitch__img' />
              <div className='glitch__img' />
              <div className='glitch__img' />
            </div>
            <h2 className='content__title'>BornDead Studios</h2>
            {/* <p className='content__text'>
              Evening was in the wood, louring with storm. A time of drought had
              sucked the weedy pool and baked the channels; birds had done with
              song.
            </p> */}
          </div>
        </main>
      </div>
    );
  };

  return (
    <React.Fragment>
      {headContent()}
      {pageContent()}
      <Script src='/js/imagesloaded.pkgd.min.js'></Script>
      <Script src='/js/demo.js'></Script>
    </React.Fragment>
  );
}
