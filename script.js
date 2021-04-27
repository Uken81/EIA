const inputList = [];
const createNameArray = () => {
    let inputArray = Array.from(document.getElementsByClassName('input-field'));
    inputArray.forEach(function(entry) {
        inputList.push(entry.name);
        console.log(inputList);
    })
};

const createKeyValuePair = key => {
   const formEntryKey = document.getElementById(`${key}`);
   console.log(formEntryKey);
   const formEntryValue = formEntryKey.value;
   console.log(formEntryValue);
   localStorage[key] = formEntryValue;    
};

const submitformEntryValues = () => {
    createNameArray();
    inputList.forEach(function (entry) {
        createKeyValuePair(entry);
    })   
};
//sets input list in local storage so outputList.js can access.
const submitList = () => {
    localStorage.setItem("list", inputList);
};

document.getElementById("name-submit").addEventListener("click", function(event) {
    event.preventDefault();
    submitformEntryValues();  
    submitList();
    
})


