import React from 'react';

function Movie({ title }){
  return <h1>I LIKE {title}</h1>
}

function App() {
  return (
    <div >
      <h1>Hello!!!!</h1>
      <Movie title="괴물"/>
      <Movie title="아가씨"/>
      <Movie title="아저씨"/>
      <Movie title="고라니"/>
    </div>
    
  );
}

export default App;
