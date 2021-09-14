import * as Style from './AppStyle.js';
import React, { useState } from 'react';
import newData from './Data/Data';

function App() {
  const [Content, setContent] = useState(newData);

  //-->  Store original data
  const original = newData;

  //-->  Function to load original data
  const getData = () => {
    console.log(original);
  };

  //-->  Funtion to Arrange in ascending order
  const setAscend = () => {
    let donda = newData.sort((a, b) => a - b);
    setContent(donda);
    console.log(Content);
  };

  //-->  Function to sort in descending order
  const setDescend = () => {
    let donda = newData.sort((a, b) => b - a);
    setContent(donda);
    console.log(Content);
  };

  //-->  Function to filter oless than 10
  const Less = () => {
    setContent(newData.filter((data) => data < 10));
    console.log(Content);
  };

  //-->  Function to filter greater than 10
  const Odds = () => {
    setContent(newData.filter((data) => data % 2));
    console.log(Content);
  };

  return (
    <Style.Container>
      <h2>😁New Array in console!!</h2>
      <Style.TopBar>
        <Style.Btn onClick={getData}>Load Data</Style.Btn>
        <Style.Btn onClick={setAscend}>Sort (Ascending)</Style.Btn>
        <Style.Btn onClick={setDescend}>Sort (Descending) </Style.Btn>
        <Style.Btn onClick={Less}>filter (Less than 10)</Style.Btn>
        <Style.Btn onClick={Odds}>filter (Odd numbers)</Style.Btn>
      </Style.TopBar>
    </Style.Container>
  );
}

export default App;
