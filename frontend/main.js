window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount();
})

const functionApiUrl = 'https://csharpportal.azurewebsites.net/api/GetResumeCounter?code=ymz-Kj5NK79_9O5bM6oCQTTjTg2EVhqMjqVO-OPhEsaqAzFuXkIx3A=='
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 5;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website callede function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}