((d) =>{
    const $menu = d.querySelector('.menu');
    const $app = d.querySelector('.apps')

    $menu.addEventListener('click', (e)=> {
        e.stopPropagation()
        $app.classList.toggle('none');
    })

    d.addEventListener('click', ()=> {
        $app.classList.add('none');
    })

})(document)