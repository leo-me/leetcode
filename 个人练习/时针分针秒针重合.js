// 时针和分针重合
function meet() {
    let secondAngle = 1;
    let minitueAngle = 1/60;
    let hourAngle= 1/60/12;
    let res = [];

    for(let i = 1; i <=12; i++) {
        let meetTime = i*60/(minitueAngle - hourAngle);

        let hour = Math.floor(meetTime / 3600);
        let minute = Math.floor((meetTime - hour*3600) / 60);

        let second = Math.floor(meetTime - hour*3600 - minute*60);

        console.log('meetTime: ', meetTime, `${hour}:${minute}:${second}`);


    }
}

meet();