const photo_list=document.querySelector('#photo-list');
db.collection("photo").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      console.log(doc.data().image)
      photo_list.innerHTML += 
      "<div class='col-lg-4 col-xs-6 col-md-3 fall-item fall-effect' id='photo-list' ><img src=" +doc.data().image+ "><h6>"
     +doc.data().name+ "</h6> <div class='mask'> <h5>"
           + doc.data().name+ "</h5> <img src=" +doc.data().image1+ " />"
            " </div>"     
      "</div></div> <br> <br>";
 });
});

//  var gallery = document.querySelector('#photo-list');
// var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
// var getHeight = function (item) { return item.querySelector('.fall-item').getBoundingClientRect().height; };
// var resizeAll = function () {
//     var altura = getVal(gallery, 'grid-auto-rows');
//     var gap = getVal(gallery, 'grid-row-gap');
//     gallery.querySelectorAll('.fall-item').forEach(function (item) {
//         var el = item;
//         el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
//     });
// };
// gallery.querySelectorAll('img').forEach(function (item) {
//     item.classList.add('byebye');
//     if (item.complete) {
//         console.log(item.src);
//     }
//     else {
//         item.addEventListener('load', function () {
//             var altura = getVal(gallery, 'grid-auto-rows');
//             var gap = getVal(gallery, 'grid-row-gap');
//             var gitem = item.parentElement.parentElement;
//             gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
//             item.classList.remove('byebye');
//         });
//     }
// });
// window.addEventListener('resize', resizeAll);
// gallery.querySelectorAll('.gallery-item').forEach(function (item) {
//     item.addEventListener('click', function () {        
//         item.classList.toggle('full');        
//     });
// });


// $('#contact-form').submit(function(e){
//       var name= document.getElementById(name),
//        email= document.getElementById(email),
//        message= document.getElementById(message);
    
//        if(!name.value || !email.value || !message.value){
//            alertify.error('please check your enteries !!')

//        }
//        else{
//             $.ajax({
//                   url: "//formspree.io/sivanirupavat@gmail.com",
//                   method: "POST",
//                   data:  {message: "hello!"},
//                   dataType: "json"
//                 });
        
//              e.preventDefault()
//              $(this).get.reset(0)
//              alertify.success('message sent.')

//        }
// })



