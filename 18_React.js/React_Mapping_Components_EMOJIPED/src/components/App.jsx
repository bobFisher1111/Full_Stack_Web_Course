import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// Used for mapping the emojipedia.js file
function createEntry(x){
  return (
    <Entry
      key={x.id}
      emoji={x.emoji}
      name={x.name}
      description={x.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
