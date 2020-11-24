/*
    - React Notes:
        - Into:
            - React:
                - A JavaScript library for building a user interfaces, front end framework
            - Component:
                - Components are independent and reusable bits of code. They serve the same 
                    purpose as JavaScript functions, but work in isolation and returns HTML via a render function.
                - Each Component will have its own:
                    - CSS File
                    - HTML File
                    - JavaScript File:
                - Updates automatically without site needing to refresh and when there is a change it will compair 
                    old render app with new and only load component that needs to change. Makes it more effiecient
            - Link to the code sandbox - online editor:
                - https://codesandbox.io/s/sleepy-meninsky-wp1b7?file=/public/index.html

        - JSX:
            - JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
            - Lets you inject javascript expression inide of html
            - Example:
                // javascript variable:
                const name = "Sean";
                // html code inside javaScript & then javaScript inside html with using {}
                ReactDOM.render(<h1> Hello {name}</h1>. document.getElementById("root"));
            - But cannot inject statments like if statements like that, you have to do it another way:
                -
*/