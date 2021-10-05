const win = {
    w: window.innerWidth,
    h: window.innerHeight,
}

var movimentFrontBuild = 0;
var movimentBackBuild = 0;

const drawImg = (img, type = 'cover', offset_x = 0, offset_y = 0) => {
    const imgRatio = img.height / img.width
    const winRatio = window.innerHeight / window.innerWidth
    if ((imgRatio < winRatio && type === 'contain') || (imgRatio > winRatio && type === 'cover')) {
        const h = window.innerWidth * imgRatio
        ctx.drawImage(img, 0, (window.innerHeight - h) / 2, window.innerWidth, h)
    }
    if ((imgRatio > winRatio && type === 'contain') || (imgRatio < winRatio && type === 'cover')) {
        const w = window.innerWidth * winRatio / imgRatio
        ctx.drawImage(img, (win.w - w) / 2, 0, w, window.innerHeight)
    }
    if (type === 'pattern') {
        ctx.save();
        ctx.translate(offset_x, offset_y);
        var pattern = ctx.createPattern(img, 'repeat-x');
        ctx.fillStyle = pattern;
        ctx.fillRect(-offset_x, -offset_y, window.innerWidth, window.innerHeight);
        ctx.restore();
    }
}

const render = () => {
    movimentBackBuild = movimentBackBuild < -buildings.width ? 0 : movimentBackBuild - .4
    movimentFrontBuild = movimentFrontBuild < -buildings.width ? 0 : movimentFrontBuild - .8

    // ctx.clearRect(0, 0, win.w, win.h)
    drawImg(bgCity)
    drawImg(buildings, 'pattern', buildings.width / 2 + (movimentBackBuild), window.innerHeight - (buildings.height * 1.25))
    drawImg(buildings, 'pattern', movimentFrontBuild, window.innerHeight - buildings.height)
    window.requestAnimationFrame(render)
}
const init = () => {
    resize()
    window.requestAnimationFrame(render);
}

const resize = () => {
    win.w = window.innerWidth
    win.h = window.innerHeight
    stage.width = win.w
    stage.height = win.h
    stage.style.width = `${win.w}px`
    stage.style.height = `${win.h}px`
}
window.addEventListener('resize', init)

var stage = document.getElementById("backStage");
var ctx = stage.getContext("2d");

var bgCity = new Image();
bgCity.src = './assets/images/bgcity.png';
bgCity.onload = init;

var buildings = new Image();
buildings.src = './assets/images/bg.png';
buildings.onload = init;
console.log(buildings);