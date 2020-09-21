document.getElementById('output').style.visibility = 'hidden';

function roundNum(num) {
    return Math.round(num*1000)/1000;
}

document.getElementById('lbsInput').addEventListener('input', function(e){
    let lbs = e.target.value;
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('gramsOutput').innerHTML = roundNum(lbs / 0.0022046);
    document.getElementById('kgOutput').innerHTML = roundNum(lbs / 2.2046);
    document.getElementById('ozOutput').innerHTML = roundNum(lbs * 16);
});