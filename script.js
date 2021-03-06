

function longest() {
    var temp = document.getElementById("stringInput");
    str = temp.value;
    let longest = '';
    let cache = '';
    if (str.length === 0) {
        return 0;
    }

    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            if (str[i] === str[i + 1]) {
                cache += str[i];
            }
        }
        if (i > 0) {
            if (str[i] === str[i - 1]) {
                cache += str[i];
            }
            if (str[i] !== str[i - 1]) {
                cache = str[i];
            }
            if (cache.length > longest.length) {
                longest = cache;
            }
        }
    }
    console.log(longest);
    document.getElementById('output').innerHTML = longest;
}