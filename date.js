
module.exports.getDate = function () {
    const today = new Date();
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };
 
    const day = today.toLocaleDateString("en-US", options);
    return day;
}