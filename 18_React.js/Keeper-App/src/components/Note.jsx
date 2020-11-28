//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
import React from "react";

function Note() {
    return (
        // adding note style css 
        <div className="note">
            <h1>This is the title</h1>
            <p>This is the content</p>
        </div>
    );
}

export { Note };