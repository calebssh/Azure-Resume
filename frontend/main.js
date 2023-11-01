window.addEventListener('DOMContentLoaded', (event) =>{
    getvisitCount();
})

const functionApi = '';

const getvisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json
    }).then(response =>{
        console.log("Website called Function API.");
        count = response.count;
        document.getElementById("counter").innertext = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}