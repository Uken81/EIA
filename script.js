const inputList = [];
const createNameArray = () => {
    let inputArray = Array.from(document.getElementsByClassName('input-field'));
    inputArray.forEach(function(entry) {
        inputList.push(entry.name);
    })
}

const createKeyPair = key => {
   const jobInfo = document.getElementById(`${key}`);
   const value = jobInfo.value;
   localStorage[key] = value;    
};

const submitValues = () => {
    createNameArray();
    inputList.forEach(function (entry) {
        createKeyPair(entry);
    })   
}

document.getElementById("name-submit").addEventListener("click", function(event) {
    submitValues();
    event.preventDefault();
})


