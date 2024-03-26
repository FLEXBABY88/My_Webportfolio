function emailSend(){
     var userName = document.getElementById('name').value; 
        var phone = document.getElementById('phone').value; 
        var email = document.getElementById('email').value; 
        var subjects= document.getElementById('subjects').value;
        var messege = document.getElementById('messege').value; 
     var messageBody ="Name" + userName +
          "<br/> Phone : " + phone +
          "<br/> Email : " + email +
          "<br/> Message: " + messege; 
          
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nathinhlanhla08@gmail.com",
    Password : "D3DB516769887FF4FE0599C0B1A68F4FDE21",
    To : '42019222@mynwu.ac.za',
    From : "nathinhlanhla08@gmail.com",
    Subject : subjects,
    Body : messageBody
}).then(
  message => {
       if(message=='OK'){
            swal("Successful", "Message sent!", "success"); }
     else{
           swal("Error", "Message was not sent!", "error");}
);
}
let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar'); 
let sections = document.querySelector('section'); 
let navLinks = document.querySelector('header nav a'); 


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active'); 
                document.querySelector('header nav a [href*='+
                id + ' ]').classList.add('active'); 
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
}
