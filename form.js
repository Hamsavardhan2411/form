const form = document.getElementById('searchform')
const loc = document.querySelector('#loc');
console.log(form)
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    const location = loc.value;
    console.log(loc)
    console.log(axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoidnRoYXJ1bjAwMSIsImEiOiJjbDJnNWtqejcwMG91M2tzY
    m5xdjNvcmN1In0.fYPiaIq6efAQSH24eeUH1Q` ))
     

});