function searchGallery() {
    let input = document.getElementById('search'); 
    input = input.value.toUpperCase();
    let sgallery = document.getElementsByClassName('thumbnails');

     // Loop through thumbnail images
     // Match images with keyword search
    for (let i = 0; i < sgallery.length; i++) {
        let entry = sgallery[i].getAttribute('data-caption');
        entry = entry.toUpperCase();

        if (entry.includes(input)) {
            sgallery[i].style.display = 'inherit';
        } else {
            sgallery[i].style.display = 'none';
        }
    }
}
