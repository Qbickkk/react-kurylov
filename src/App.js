import React from 'react';

import {MainComponent} from "./components/MainComponent";

const App = () => {


    const world = (value) => `world ${value}`;

    const mainTitle = 'Chinazesss';

    return (
      <div>
          <h1>Hello {world('Jamaika')}</h1>
          <MainComponent title={mainTitle}/>
      </div>
    );
};

export {App};