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


// $(function () {
// for (var j in images) {
//     console.log(images[j]);
//     console.log(JSON.stringify((images[j])));
//     console.log(JSON.stringify((images[j].heading)));
//     console.log("------------");
//     console.log(((images[j].path)));
    


//     var image = $("<div>");
//     var col = $("<div>").addClass("col-xs-12 col-sm-4 col-md-4 col-lg-4");
//     var text = $("<div>").addClass("text");
//     image.append(text);
//     col.append(image);
//     console.log("------------");
//     $("#images").append(col);
//     image.css("background-image", 'url("' + images[j].path + '")');
//     image.addClass("imageContainer");
//     image.addClass("image");
//     image.addClass("overlay");
// }

// });

// .imageContainer

// $.each(images, function(key, value){
//     var object = JSON.stringify(key, value);

//     console.log(object);
// });


// findInObj(images, "heading", "description");


// $(document).ready(function () {
//     $("p").mouseover(function () {
//         $("p").css("background-color", "yellow");
//     });
//     $("p").mouseout(function () {
//         $("p").css("background-color", "lightgray");
//     });
// });