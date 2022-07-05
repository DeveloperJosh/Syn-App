import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/output.css';
import { createRoot } from 'react-dom/client';

//// take data file from input and parse it into an array of objects
function newpage() {
  //// add now loading spinner then load new page
  const element = document.getElementById('root');
  const root = createRoot(element!);
  root.render(
    <div className="container mx-auto px-4 py-52">
    <div className="flex flex-col items-center">
      <button onClick={render} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Home
      </button>
    </div>
  </div>
  );
}

function render() {
  /// use createRoot
  const element = document.getElementById('root');
  const root = createRoot(element!);
  root.render(
      <div className="container mx-auto px-4 py-52">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-3xl font-bold">SynDB</h1>
          <p className="text-white text-xl">
            A simple, yet powerful, database system.
          </p>
          <br />
          <button onClick={newpage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
  );
}

render();

