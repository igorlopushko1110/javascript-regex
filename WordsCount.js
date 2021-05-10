function wordsCount(sentence) {

    const result = [];

    const wordRegexp = /^[a-zA-Z-]+$/;

    const symbolsRegexp = /[.,\/#!$?%^&*;:{}=_`~()]+(?:\s|$)/gm;

    const words = sentence.trim().replaceAll(symbolsRegexp, ' ').split(' ');

    for (let i = 0; i < words.length; i++) {
        if(wordRegexp.test(words[i])) {
            result.push(words[i]);
        }
    }

    return `${result} ${result.length}`;

}

console.log(wordsCount('How many eggs are in a half-dozen, 13?'));
console.log(wordsCount('he is a good programmer, he won 865 competitions, but sometimes he dont. What do you think? All test-cases should pass. Done-done?'));
console.log(wordsCount('jds dsaf lkdf kdsa fkldsf, adsbf ldka ads? asd bfdal ds bf[l. akf dhj ds 878  dwa WE DE 7475 dsfh ds  RAMU 748 dj.'));
