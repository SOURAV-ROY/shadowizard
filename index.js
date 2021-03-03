function shadowizard(options) {
    let images = document.querySelectorAll('.shadowizard');

    if (options.shadow_type === 'hard') {
        options.shadow_type = '0px';
    } else
        options.shadow_type = '15px';

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0, 0, 0,0.7)`;

        if (options.padding) {
            image.style.padding = '1rem';
        }
    })

}

module.exports.shadowizard = shadowizard;
