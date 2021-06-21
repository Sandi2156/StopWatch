

let setWatch = new Date();
function Stopwatch(){
    let seconds = 0, running = false, startTime , totalTime , previous = 0;

    this.start = function(){
        if(running){
            document.getElementById('warning').innerHTML = `<h3>Stopwatch is alredy running</h3>`
            setInterval(() => {
                document.getElementById('warning').innerHTML =``;
            }, 3000);
        }
        
        else{
        running = true;
        startTime = new Date();
        totalTime = setInterval(() => {
            seconds = previous + (new Date().getTime() - startTime.getTime())/1000;
            setWatch.setSeconds(seconds);
            setWatch.setMinutes(seconds/60);
            setWatch.setHours(seconds/3600);
            document.getElementById('stopwatch').innerHTML = `<h3>${setWatch.getHours()} : ${setWatch.getMinutes()} : ${setWatch.getSeconds()}</h3>`
        }, 1000);
    }
    }

    this.stop = function(){
        if(!running){
            document.getElementById('warning').innerHTML = `<h3>Stopwatch is alredy stopped</h3>`
            setInterval(() => {
                document.getElementById('warning').innerHTML =``;
            }, 3000);
        }
        else{
        previous = seconds;
        running = false;
        clearInterval(totalTime);
        }
    }

    this.reset = function(){
        seconds = 0;
        running = false;
        startTime = null;
        previous = 0;
        document.getElementById('stopwatch').innerHTML = `<h3>00 : 00 : 00</h3>`

    }
}

let st = new Stopwatch();

document.getElementById('start').addEventListener('click', ()=>{
    st.start();
})
document.getElementById('stop').addEventListener('click',()=>{
    st.stop();
})
document.getElementById('reset').addEventListener('click', ()=>{
    st.reset();
})