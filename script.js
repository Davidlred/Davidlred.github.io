var tablinks  = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
const sidemenu = document.getElementById("sidemenu");
const msg = document.getElementById("msg");
const form = document.forms['submit-to-google-sheet'];

const sidebar = document.getElementsByClassName("sidebar");

const scriptURL = 'https://script.google.com/macros/s/AKfycbw654p5RROenToIv_p_7c5ssYuuErV65aZUgFGXMzeoC-rXDKzhbt-W0RKE6jtIfUGu/exec'
     //  const form = document.forms['submit-to-google-sheet']

function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}

function openMenu(){
    sidemenu.style.right = "0";
}
function closeMenu(){
    sidemenu.style.right = "-200px";
}

       
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = " "
                },5000)

                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
    
  
      