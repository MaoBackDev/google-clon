((d) =>{
    const $menu = d.querySelector('.menu');
    const $app = d.querySelector('.apps')

    $menu.addEventListener('click', (e)  => {
        $app.classList.toggle('none');
    })

    // d.addEventListener('click', (e) => {
    //     // Elije a cualquier elemento a que sea hijo de .menu
    //     if(!e.target.matches('html')) return false;
    //     $app.classList.add('none');     
    // })


})(document)