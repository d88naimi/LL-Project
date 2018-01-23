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
    console.log("------------");
    console.log(((images[j].path)));
    


}

});

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