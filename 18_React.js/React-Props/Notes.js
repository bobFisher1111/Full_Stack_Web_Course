/*
    - React- Props Notes:
        - Lets you pass function as an html attributes
        - Lets you create an object and can pass in proterites by using props
            - You can name them whatever you want, if you want to use img, it acts same as img from html
        * Can only put custom css inside the function not the object being created in the render
*/
// Example:
// use props instead of hard coding the values
function Card(props){
    return (
        <div className="my-style"> 
            <h2>{props.name}</h2>
            <img
            src= {props.img}
            alt="avatar_img"
            />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    )
}
// Take the function created for props and use it like an property in html and give it values
ReactDOM.render(
    <div>
        <Card name="ChosenName" 
            img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
            tel= "+123 456 789"
            email = "b@beyonce.com"/>
    </div>,
    document.getElementById("root")
);