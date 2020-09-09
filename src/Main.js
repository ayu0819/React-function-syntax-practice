import React from 'react';
import Language from './Language'
import './App.css';

const Main = (props) => {
  //Datenarray Definition (MAP)
  let languageList = [
    {
      name: 'English',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_england.png',
    introduction: 'Diese Sprache wird vom Vereinigten Königreich und den Vereinigten Staaten gesprochen.'
    },
    {
      name: 'Japanish',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_japan.png',
    introduction: 'Diese Sprache wird in Japan gesprochen.'
    },
    {
      name: 'Deutsch',
    image: 'http://hudehisa.sakura.ne.jp/gitgub_image/react_flag_germany.png',
    introduction: 'Diese Sprache wird in Deutschland und der Schweiz gesprochen.'
    }
  ];
  
  return(
    <>
     <h1>Welche Sprache sprichst du?</h1>
        <div className='language'>
          {/* Datenarray aufrufen */}
          {languageList.map((languageItem)=> {
            return(
              <Language
              name = {languageItem.name}
              image = {languageItem.image}
              introduction = {languageItem.introduction}
              />
            )
          })}
        </div>
    </>
  )
}

export default Main;