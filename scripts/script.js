function randomImage(element) {
    const el = element.children[0];
    // 	Array of Image classes 	
    const imageClasses = [['n01-a', 'n01-b', 'n01-c', 'n01-d', 'n01-e', 'n01-f'], ['o02-a', 'o02-b', 'o02-c', 'o02-d', 'o02-e', 'o02-f', 'o02-g', 'o02-h'], ['a03-a', 'a03-b', 'a03-c', 'a03-d', 'a03-e'], ['h04-a', 'h04-b', 'h04-c', 'h04-d', 'h04-e', 'h04-f', 'h04-g'], ['k05-a', 'k05-b', 'k05-c', 'k05-d', 'k05-e', 'k05-f', 'k05-g', 'k05-h'], ['a06-a', 'a06-b', 'a06-c', 'a06-d', 'a06-e', 'a06-f'], ['w07-a', 'w07-b', 'w07-c', 'w07-d', 'w07-e', 'w07-f', 'w07-g'], ['a08-a', 'a08-b', 'a08-c', 'a08-d', 'a08-e'], ['m09-a', 'm09-b', 'm09-c', 'm09-d', 'm09-e', 'm09-f', 'm09-g', 'm09-h'], ['u10-a', 'u10-b', 'u10-c', 'u10-d', 'u10-e', 'u10-f', 'u10-g', 'u10-h'], ['r11-a', 'r11-b', 'r11-c', 'r11-d', 'r11-e', 'r11-f', 'r11-g'], ['a12-a', 'a12-b', 'a12-c', 'a12-d', 'a12-e'], ['gen-a', 'gen-b', 'gen-c', 'gen-d', 'gen-e', 'gen-f'], ['exe-a', 'exe-b', 'exe-c', 'exe-d', 'exe-e', 'exe-f', 'exe-g'], ['see-a', 'see-b', 'see-c', 'see-d', 'see-e'], ['con-a', 'con-b', 'con-c', 'con-d', 'con-e']];

    // 	getting an array of images for each letter based on the id of the anchor element clicked
    let randomImageClasses;
    const elementID = element.getAttribute('id');
    if (elementID === 'n01') {
        randomImageClasses = imageClasses[0];
    } else if (elementID === 'o02') {
        randomImageClasses = imageClasses[1];
    } else if (elementID === 'a03') {
        randomImageClasses = imageClasses[2];
    } else if (elementID === 'h04') {
        randomImageClasses = imageClasses[3];
    } else if (elementID === 'k05') {
        randomImageClasses = imageClasses[4];
    } else if (elementID === 'a06') {
        randomImageClasses = imageClasses[5];
    } else if (elementID === 'w07') {
        randomImageClasses = imageClasses[6];
    } else if (elementID === 'a08') {
        randomImageClasses = imageClasses[7];
    } else if (elementID === 'm09') {
        randomImageClasses = imageClasses[8];
    } else if (elementID === 'u10') {
        randomImageClasses = imageClasses[9];
    } else if (elementID === 'r11') {
        randomImageClasses = imageClasses[10];
    } else if (elementID === 'a12') {
        randomImageClasses = imageClasses[11];
    } else if (elementID === 'gen') {
        randomImageClasses = imageClasses[12];
    } else if (elementID === 'exe') {
        randomImageClasses = imageClasses[13];
    } else if (elementID === 'see') {
        randomImageClasses = imageClasses[14];
    } else if (elementID === 'con') {
        randomImageClasses = imageClasses[15];
    } else {
        randomImageClasses = imageClasses[16];
    }
    // 	get the number of images
    const numberOfImages = randomImageClasses.length;
    // 	choose a random image that is not bigger than the number of images
    const randomImage = Math.floor((Math.random() * numberOfImages));
    // choose another image in case the random image is the current
    const anotherImage =
        numberOfImages == randomImage + 1 ?
        randomImage - 1 : randomImage + 1;
    // if the random image is the current image then choose another, else choose the random image
    const chosenImage =
        el.className === randomImageClasses[randomImage] ?
        randomImageClasses[anotherImage] :
        randomImageClasses[randomImage];
    el.className = chosenImage;
}
