exports.getDate = getDate; // this will need to be done fore each function

function getDate(){
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    const day = today.toLocaleDateString("en-US", options);

    return day;
}

// Another way of doing it and getting only day:
exports.getDay = function() {
    const today = new Date();
    const dayOfWeek = {
        day: "numeric"
    };

    return today.toLocaleDateString("en-US", dayOfWeek);
};
