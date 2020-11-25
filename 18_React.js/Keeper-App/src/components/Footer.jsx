//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            Copyright © {currentYear}
        </footer>
    );
}

export { Footer };