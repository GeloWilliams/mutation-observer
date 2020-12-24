// Choose the elements to observe 
var elemsToObserve = document.querySelectorAll('.carousel-images');

// Loop through those same elements 
elemsToObserve.forEach(function(elem) {

    // Identify the state that will change (here, the class that changes are contingent upon)
    var prevClassState = elem.classList.contains('slick-current');

    // Instantiate a new MutationObserver with a parameter that represents each mutation (change)
    var observer = new MutationObserver(function(mutations) {

        mutations.forEach(function(mutation) {
            if(mutation.attributeName == "class"){
                var currentClassState = mutation.target.classList.contains('slick-current');
                if(prevClassState !== currentClassState)    {
                    prevClassState = currentClassState;
                    if(currentClassState) {

                        // Set the image descriptions to 'display:none' by deftext4lt | grab all of the images and their descriptions

                        // Use a class, for example 'hide' 

                        var images = document.querySelectorAll('.carousel-images');
                        var text1 = document.querySelector('p.text1-description');
                        var text2 = document.querySelector('p.text2-description');
                        var text3 = document.querySelector('p.text3-description');
                        var text4 = document.querySelector('p.text4-description');
                        var text5 = document.querySelector('p.text5-description');
           
                        // Loop through each image 
                        
                        images.forEach(function(image) {

                            // Each image should be identified by a unique class, combine this with the current slide to add that image's specific description 

                            // Remove the hide class from the current slide's description, but add it to all of the others (if not already there) 

                            if(image.classList.contains('image1') && image.classList.contains('slick-current')) {
                                text1.classList.remove('hide');
                                if(!text2.classList.contains('hide')) {
                                    text2.classList.add('hide');
                                } else if(!text3.classList.contains('hide')) {
                                    text3.classList.add('hide');
                                } else if(!text4.classList.contains('hide')) {
                                    text4.classList.add('hide');
                                } else if(!text5.classList.contains('hide')) {
                                    text5.classList.add('hide');
                                }
                            }

                            if(image.classList.contains('image2') && image.classList.contains('slick-current')) {
                                text2.classList.remove('hide');
                                if(!text1.classList.contains('hide')) {
                                    text1.classList.add('hide');
                                } else if(!text3.classList.contains('hide')) {
                                    text3.classList.add('hide');
                                } else if(!text4.classList.contains('hide')) {
                                    text4.classList.add('hide');
                                } else if(!text5.classList.contains('hide')) {
                                    text5.classList.add('hide');
                                }
                            }

                            if(image.classList.contains('image3') && image.classList.contains('slick-current')) {
                                text3.classList.remove('hide');
                                if(!text2.classList.contains('hide')) {
                                    text2.classList.add('hide');
                                } else if(!text1.classList.contains('hide')) {
                                    text1.classList.add('hide');
                                } else if(!text4.classList.contains('hide')) {
                                    text4.classList.add('hide');
                                } else if(!text5.classList.contains('hide')) {
                                    text5.classList.add('hide');
                                }
                            }

                            if(image.classList.contains('image4') && image.classList.contains('slick-current')) {
                                text4.classList.remove('hide');
                                if(!text2.classList.contains('hide')) {
                                    text2.classList.add('hide');
                                } else if(!text3.classList.contains('hide')) {
                                    text3.classList.add('hide');
                                } else if(!text1.classList.contains('hide')) {
                                    text1.classList.add('hide');
                                } else if(!text5.classList.contains('hide')) {
                                    text5.classList.add('hide');
                                }
                            }

                            if(image.classList.contains('image5') && image.classList.contains('slick-current')) {
                                text5.classList.remove('hide');
                                if(!text2.classList.contains('hide')) {
                                    text2.classList.add('hide');
                                } else if(!text3.classList.contains('hide')) {
                                    text3.classList.add('hide');
                                } else if(!text4.classList.contains('hide')) {
                                    text4.classList.add('hide');
                                } else if(!text1.classList.contains('hide')) {
                                    text1.classList.add('hide');
                                }
                            }
                        });
                    }
                }
            }
        });
    });
    observer.observe(elem, {attributes: true});
});
