var images = {
    man: {
        heading: 'Man Image',
        description: 'Image of a man.',
        path: 'img/man.jpg'
    },
    wizard: {
        heading: 'Wizard Image',
        description: 'Image of a wizard.',
        path: 'img/wizard.jpg'
    },
    beast: {
        heading: 'Beast Image',
        description: 'Image of a beast.',
        path: 'img/beast.jpg'
    }
    // testOne: {
    //     heading: 'Beast Image',
    //     description: 'Image of a beast.',
    //     path: 'img/beast.jpg'
    // },
    // testTwo: {
    //     heading: 'Beast Image',
    //     description: 'Image of a beast.',
    //     path: 'img/beast.jpg'
    // },
    // testThree: {
    //     heading: 'Beast Image',
    //     description: 'Image of a beast.',
    //     path: 'img/beast.jpg'
    // }
};

// document ready function to load page
$(function () {
    // loop through object 
    for (var j in images) {
        console.log(images[j]);
        console.log(JSON.stringify((images[j])));

        // creating the three column row with the object and their info dynamically 
        var image = $("<div>", { "class": "row col-xs-12 col-sm-4 col-md-4" });
        var col = $("<div>").addClass("col-xs-12 col-sm-12 col-md-12");
        var divImageContainer = $("<div>").addClass("imageContainer");
        divImageContainer.css("background-image", 'url("' + images[j].path + '")');
        var divImageOverlay = $("<div>", { "class": "overlay" });
        var text = $("<div>").addClass("text");
        text.html(images[j].heading + "<br>" + images[j].description);
        // append all the vars to image
        divImageOverlay.append(text);
        divImageContainer.append(divImageOverlay);
        col.append(divImageContainer);
        image.append(col);
        

        $("#images").append(image);

    }

});




