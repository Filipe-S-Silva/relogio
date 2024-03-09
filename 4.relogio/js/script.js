

const clock = setInterval(function time() {

    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let s = new Date().getSeconds();

    if (hr < 10) {
        hr = '0' + hr;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (s < 10) {
        s = '0' + s;
    }

    if (hr >= 18 || hr < 7) {

        //noite e madrugada
        document.querySelector('#sun').src = "img/solDormindo.png";
        document.querySelector('body').setAttribute("class", "night");

    } else if ((hr >= 15 && min >= 30) || (hr >= 16)) {

        //tarde
        document.querySelector('#sun').src = "img/solCansado.png";
        document.querySelector('body').setAttribute("class", "afternoon");

    } else {

        //manhã 
        document.querySelector('#sun').src = "img/solFeliz.png";
        document.querySelector('body').setAttribute("class", "moorning");

    }


    document.getElementById('hours').textContent = hr;
    document.getElementById('minutes').textContent = min;
    document.getElementById('seconds').textContent = s;
})