const numberList = document.getElementById('numberList');
const searchButton = document.getElementById('submitButton');
arr = [];
searchItem = '';
results = {index: -1, comparisons: 0, timeMs: 0};

function linearSearch(arr, target) {
    let comparisons = 0;
    const start = performance.now();

    for (let i = 0; i < arr.length; i++) {
        comparisons++;
        if (arr[i] === target) {
            const timeMs = performance.now() - start;
            return { index: i, comparisons, timeMs };
        }
    }
    const timeMs = performance.now() - start;
    return { index: -1, comparisons, timeMs };
};

const arrayContainer = document.getElementById('arrayContainer');
searchButton.addEventListener('click', () => {
    arr = numberList.value.split(',');
    if (!arr || arr.length === 0 || arr[0] == '') {
        arrayContainer.textContent = "Please enter a valid list of numbers.";
        return;
    } else {
        arrayContainer.textContent = "Array: " + arr.join(', ');
    }
});

const result = document.getElementById('result');
function showResult(message) {
    result.textContent = message;
};

const itemToFind = document.getElementById('itemToFind');
const findButton = document.getElementById('findButton');
const searchMethod = document.getElementById('searchMethod').value;
findButton.addEventListener('click', () => {
    searchItem = itemToFind.value;
    if (searchItem === '') {
        showResult("Please enter an item to find.");
    }
    else {
        if (searchMethod === 'linear') {
            console.log("Using Linear Search");
            results = linearSearch(arr, searchItem);
        }
        if (results.index !== -1) {
            console.log('Item found at index: ' + results.index);
            showResult('Item found at index: ' + results.index + '. Comparisons: ' + results.comparisons + '. Time: ' + results.timeMs.toFixed(2) + ' ms');
        }
        else {
            console.log('Item not found in the list.');
            showResult('Item not found in the list.' + ' Comparisons: ' + results.comparisons + '. Time: ' + results.timeMs.toFixed(2) + ' ms');
        }
    }
});