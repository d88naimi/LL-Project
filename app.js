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
};


$(document).ready(function () {
for (var j in images) {
    console.log(images[j]);
    console.log(JSON.stringify((images[j])));
    console.log(JSON.stringify((images[j].heading)));
    console.log(JSON.stringify((images[j].path)));
    

    var heading =  $("<div>").text((JSON.stringify((images[j].heading))));
    heading.addClass("heading");

    $("#dude").append(heading);

    var description = $("<div>").text((JSON.stringify((images[j].description))));
    description.addClass("heading");
    $("#dude").append(description);

    var image = $("<img>");
    image.addClass("leaselabs-image");
    image.attr("src", (JSON.stringify((images[j].path))));
    $("#dude").append(image);
}

});



// $.each(images, function(key, value){
//     var object = JSON.stringify(key, value);

//     console.log(object);
// });


// findInObj(images, "heading", "description");