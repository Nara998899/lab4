function max(a, b) {
    if (a > b) return a;
    return b;
}

function calculateMax() {
    const x = document.getElementById('max-x').value * 1;
    const y = document.getElementById('max-y').value * 1;
    document.getElementById('max-result').value = max(x, y);
}

function calculateMaxOfThree() {
    const x = document.getElementById('max-3-x').value * 1;
    const y = document.getElementById('max-3-y').value * 1;
    const z = document.getElementById('max-3-z').value * 1;

    document.getElementById('max-3-result').value = max(max(x, y), z);
}
function isVowel() {
    const x = document.getElementById('char').value;
    let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    document.getElementById('vowel-result').value = false;
    for (let i = 0; i < vowels.length; i++) {
        if (x === vowels[i]) {
            document.getElementById('vowel-result').value = true;
        }
    }
}

function sumOfArray() {
    const input = document.getElementById('array-input').value.split(',');
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i] * 1;
    }
    document.getElementById('sum-result').value = sum;
}

function multiplesArray() {
    const input = document.getElementById('array-input').value.split(',');
    let sum = 1;
    for (let i = 0; i < input.length; i++) {
        sum *= input[i] * 1;
    }
    document.getElementById('multiply-result').value = sum;
}

function reverse() {
    const text = document.getElementById('reverse-input').value;

    let reversed = '';
    for (let i = 0; i < text.length; i++) {
        reversed = text.charAt(i) + reversed;
    }
    document.getElementById('reverse-result').value = reversed;
}
function runFindLongestWord() {
    let words = document.getElementById('longest-input').value.split(' ');
    document.getElementById('longest-result').value = findLongestWord(words);
}

function findLongestWord(words) {
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        max = Math.max(max, words[i].length);
    }
    return max;
}

function runFilterLongWords() {
    let words = document.getElementById('filter-long-input-words').value.split(' ');
    let len = document.getElementById('filter-long-input-length').value * 1;
    document.getElementById('filter-long-result').value = filterLongWords(words, len).join(' ')

}

function filterLongWords(words, len) {
    //words.stream().filter(         (word) -> w.length > len);
    return words.filter(function (word) { return word.length > len });
}

function run9() {
    const a = [1, 3, 5, 3, 3];
    const b = a.map(function (elem, i, array) {
        return elem * 10;
    });
    console.log(b);

    const c = a.filter(function (elem, i, array) {
        return elem === 3;
    });
    console.log(c);

    const d = a.reduce(function (prevValue, elem, i) {
        return prevValue + elem;
    }, 0);
    console.log(d);
}
/*

    const d2 = a.find(function (elem) { return elem > 1; }); //3
    const d3 = a.findIndex(function (elem) { return elem > 1; }); //1
    console.log(d2);
    console.log(d3);
}*/