import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/output.css';
import * as ReactDOMClient from 'react-dom/client';

function StartPage() {
  const element = document.getElementById('root');
  const root = ReactDOMClient.createRoot(element!);
  root.render(
  <div className="container mx-auto px-4 py-52">
  <div className="flex flex-col items-center">
    <h1 className="text-white text-3xl font-bold">SynDB</h1>
    <p className="text-white text-xl">
      A simple, yet powerful, database system.
    </p>
    <br />
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={render}>
      Home2
    </button>
  </div>
</div>
);
}

function render() {
  /// use createRoot
  const element = document.getElementById('root');
  const root = ReactDOMClient.createRoot(element!);
  root.render(
      <div className="container mx-auto px-4 py-52">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-3xl font-bold">SynDB</h1>
          <p className="text-white text-xl">
            A simple, yet powerful, database system.
          </p>
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={StartPage}>
            Home1
          </button>
        </div>
      </div>
  );
}

render();