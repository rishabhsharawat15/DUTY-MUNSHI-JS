//for one funtion best to use like this but for more than one funtion we can use
//module.exports = getDate;  //simply passing function not running it
//function getdate()
//{
//   Code
//}

//following above methi=od of declaration
//module.exports.getDate = getDate;
//module.exports.getDay = getDay;
//this way we can store manny values
//or 
//we can write module.exports <> exports
exports.getDate = function() {
    //to get todays date we use these
    //in build funtion date simailary getDate();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
    var day = today.toLocaleDateString("en-us", options); //this is inbuild
    return day;
}