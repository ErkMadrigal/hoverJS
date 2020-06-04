(() => {
    'use strict';
    window.addEventListener('load', () => {
        var perfile = document.querySelector('#perfile');
        var subCard = document.querySelector('#subCard');

        const none = () => {
            subCard.style.display = 'none';
            subCard.style.marginTop = '-30rem';
            subCard.style.transitionDuration = '1s';
            subCard.style.transform = 'scale(1.1)';

            perfile.style.transform = 'scale(1)';
        }

        const hover = () => {
            perfile.style.transform = 'scale(1.1)';
            perfile.style.zIndex = '3';
            perfile.style.transitionDuration = '.5s';

            subCard.style.display = 'block';
            subCard.style.zIndex = '9999';
        }

        perfile.addEventListener('mouseover', hover);
        perfile.addEventListener('mouseout', none);
        
        none();

        var btn = document.getElementById("btn");
        var file = document.getElementById("file");

        btn.onclick = (e) => {
            e.preventDefault();
            file.click();
        }
            
        file.onchange = (e) => {

            // Creamos el objeto de la clase FileReader
            var reader = new FileReader();
        
            // Leemos el archivo subido y se lo pasamos a nuestro fileReader
            reader.readAsDataURL(e.target.files[0]);
        
            // Le decimos que cuando este listo ejecute el código interno
            reader.onload = () => {
                var img = document.getElementById('preview');
        
                img.src = reader.result;
        
            };

        }
       
    }, false);
})();