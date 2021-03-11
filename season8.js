const click = document.getElementById('darkMode');

click.addEventListener('click', function(event){
  event.preventDefault(); 
    $('#finale').toggleClass('darkMode');



})


const submit = document.getElementById('submit');

$(submit).on('click', function(event){
    event.preventDefault();
    $('#commentSection').append(`
    <div class="RAD">

    <div id="displayFlex">
    <img src="profilePic.png" alt="userPic">

    <p class="furst">${
        ($('#displayName').val()  ) 
    } </p>

    <p class="furst">${
        ($('#comment').val()  ) 
    } </p>
    
    </div>

    <div class="editDelete">
    <button id="button">Edit</button>
    <button id="delete">Delete</button>
    </div>


    <div class="formEdit">
            <form>
                <input id="textEdit" name="fname" required>
                <input id="submitValue" type="submit" value="Submit">
            </form>
    
    </div>

</div>
`);
})


const deleteButton = document.getElementById('delete');

$("#commentSection").on("click", '#delete', function(event){
    event.preventDefault();
    let Parent = $(this).parents ()[1];

    $(Parent).remove();


    console.log(Parent);

});
console.log(deleteButton);




const editorButton = document.getElementById('button');

$("#commentSection").on('click', '#button', function(event){
    event.preventDefault();

    let subParent = $(this).parents()[1];

    let baseParent = $(subParent).children()[2];

  $(baseParent).toggleClass('formEdit');

    console.log(baseParent);



});



const clickToSubmit = document.getElementById('submitValue');

$('#commentSection').on('click', '#submitValue', function(event){
    event.preventDefault();


 let succession = $(this).prev();

 let wayStar = $(succession).val();
 
 
 console.log();



 let stretch = $(this).parents()[2];

 let AOD = $(stretch).children()[0];

 let newKomment = $(AOD).children()[1];

 $(newKomment).text(wayStar);
 
 console.log(newKomment);

 });



