const portfolio = document.querySelector('.portfolio');
const prev = document.querySelector('.prev')





portfolio.addEventListener('click', function (e) {
    
    console.log(e.target)

    prev.querySelector('img').src = `${e.target.src}`;

    prev.style.zIndex = '1';
    prev.querySelector('.backk').style.zindex = '2';
    prev.querySelector('.tampil').style.zindex = '3';
    prev.querySelector('.perbesar').style.zIndex = '4';

    prev.classList.add('opacity')


})

prev.querySelector('.backk').addEventListener('click', function () {
    prev.classList.add('Ropacity');
    setTimeout(function () {
        prev.classList.remove('opacity');
        prev.classList.remove('Ropacity');
        prev.style.zIndex = '-1';

    }, 500)

})

let lebar = 768;

document.querySelector('.zoomIn').addEventListener('click', function () {
    lebar += 50;
    prev.querySelector('.tampil').style.width = '' + lebar + 'px';
    
})

document.querySelector('.zoomOut').addEventListener('click', function () {
    lebar -= 50;
    prev.querySelector('.tampil').style.width = '' + lebar + 'px';
    
})