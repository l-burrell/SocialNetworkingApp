
//Occuring when image is being chosen//
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#stockImage')
                .attr('src', e.target.result)
                .width(200)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
 
//When button inside modal is clicked//
    var count = 1;
    function setColor(btn, color) {
        var property = document.getElementById(btn);
        if (count == 0) {
            property.style.backgroundColor = "#2C6241"
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#CA0061"
            count = 0;
        }
    }

    
