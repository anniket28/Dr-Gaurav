function openNavbarLinks() {
    if(document.getElementById('navbarLinks').style.height==='0px'){
        document.getElementById('navbarLinks').style.height='128px'
    }
    else{
        document.getElementById('navbarLinks').style.height='0px'
    }
}

let navFixedSize=window.matchMedia("(min-width: 1024px)")
if(navFixedSize.matches){
    document.addEventListener('scroll',()=>{
        if(window.scrollY>=125){
            document.getElementById('fixedNavbar').classList.add('fixed')
            document.getElementById('fixedNavbar').style.display='flex'
        }
        else{
            document.getElementById('fixedNavbar').classList.remove('fixed')
            document.getElementById('fixedNavbar').style.display='none'
        }
    })
}

document.addEventListener('scroll',()=>{
    if(window.scrollY>=175){
        document.getElementById('backToTop').classList.remove('hidden')
    }
    else{
        document.getElementById('backToTop').classList.add('hidden')
    }
})
function backToTop(){
    document.body.scrollTop=0
    document.documentElement.scrollTop = 0;
}

function openWhatsapp() {
    window.open("https://api.whatsapp.com/send?text=Hello&phone=+919719077550","_blank")
}

window.onload=()=>{
    var d = new Date();

    var s = d.getFullYear() + '-' + ('0' + (d.getMonth()+1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  
    var node = document.getElementById('dt');
    if (node) {
        node.setAttribute('min', s);
    }
}
// Appointment Form
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}
document.getElementById('appointment').addEventListener('click',(event)=>{
    // Name
    if(document.getElementById('name').value.length==0){
        document.getElementById('name-req').style.display='block'
        event.preventDefault()
    }
    else if(document.getElementById('name').value.length!=0){
        document.getElementById('name-req').style.display='none'
    }
    // Email
    if(document.getElementById('mail').value.length==0){
        document.getElementById('mail-req').style.display='block'
        event.preventDefault()
    }
    else if(document.getElementById('mail').value.length!=0){
        if(ValidateEmail(document.getElementById('mail').value)){
            document.getElementById('mail-req').style.display='none'
            document.getElementById('mail-format').style.display='none'
        }
        else{
            document.getElementById('mail-req').style.display='none'
            document.getElementById('mail-format').style.display='block'
            event.preventDefault()
        }
    }
    // Contact
    if(document.getElementById('cont').value.length==0){
        document.getElementById('cont-req').style.display='block'
        document.getElementById('cont-format').style.display='none'
        document.getElementById('cont-start').style.display='none'
        event.preventDefault()
    }
    else if(document.getElementById('cont').value.length!=0){
        if(document.getElementById('cont').value[0]=='0'){
            document.getElementById('cont-req').style.display='none'
            document.getElementById('cont-format').style.display='none'
            document.getElementById('cont-start').style.display='block'
            event.preventDefault()
        }
        else{
            if(document.getElementById('cont').value.length==10){
                document.getElementById('cont-req').style.display='none'
                document.getElementById('cont-format').style.display='none'
                document.getElementById('cont-start').style.display='none'
            }
            else{
                document.getElementById('cont-req').style.display='none'
                document.getElementById('cont-format').style.display='block'
                document.getElementById('cont-start').style.display='none'
                event.preventDefault()
            }
        }
    }
    // Date
    if(document.getElementById('dt').value.length==0){
        document.getElementById('dt-req').style.display='block'
        document.getElementById('dt-now').style.display='none'
        document.getElementById('dt-off').style.display='none'
        event.preventDefault()
    }
    else if(document.getElementById('dt').value.length!=0){
        dt=new Date()
        var s = dt.getFullYear() + '-' + 
            ('0' + (dt.getMonth()+1)).slice(-2) + '-' +
            ('0' + dt.getDate()).slice(-2);
        s.toString()
        d=new Date(document.getElementById('dt').value)
        if(d.getDay()==0){
            document.getElementById('dt-req').style.display='none'
            document.getElementById('dt-off').style.display='block'
            document.getElementById('dt-now').style.display='none'
            event.preventDefault()
        }
        else if(dt.getHours()>=18 && document.getElementById('dt').value==s){
            document.getElementById('dt-req').style.display='none'
            document.getElementById('dt-off').style.display='none'
            document.getElementById('dt-now').style.display='block'
            event.preventDefault()
        }
        else{
            document.getElementById('dt-req').style.display='none'
            document.getElementById('dt-off').style.display='none'
            document.getElementById('dt-now').style.display='none'
        }
    }
    // Time
    if(document.getElementById('time').value.length==0){
        document.getElementById('time-req').style.display='block'
        event.preventDefault()
    }
    else if(document.getElementById('time').value.length!=0){
        document.getElementById('time-req').style.display='none'
    }
    // Location
    if(document.getElementById('loc').value.length==0){
        document.getElementById('loc-req').style.display='block'
        event.preventDefault()
    }
    else if(document.getElementById('loc').value.length!=0){
        document.getElementById('loc-req').style.display='none'
    }
})

// Enquiry Form
document.getElementById('enquiry').addEventListener('click',(event)=>{
    // Name
    if(document.getElementById('username').value.length==0){
        document.getElementById('username-req').style.display='block'
        event.preventDefault()
    }
    else if(document.getElementById('username').value.length!=0){
        document.getElementById('username-req').style.display='none'
    }
    // Contact
    if(document.getElementById('usercont').value.length==0){
        document.getElementById('usercont-req').style.display='block'
        document.getElementById('usercont-format').style.display='none'
        document.getElementById('usercont-start').style.display='none'
        event.preventDefault()
    }
    else if(document.getElementById('usercont').value.length!=0){
        if(document.getElementById('usercont').value[0]=='0'){
            document.getElementById('usercont-req').style.display='none'
            document.getElementById('usercont-format').style.display='none'
            document.getElementById('usercont-start').style.display='block'
            event.preventDefault()
        }
        else{
            if(document.getElementById('usercont').value.length==10){
                document.getElementById('usercont-req').style.display='none'
                document.getElementById('usercont-format').style.display='none'
                document.getElementById('usercont-start').style.display='none'
            }
            else{
                document.getElementById('usercont-req').style.display='none'
                document.getElementById('usercont-format').style.display='block'
                document.getElementById('usercont-start').style.display='none'
                event.preventDefault()
            }
        }
    }
    // Time
    if(document.getElementById('enq').value.length==0){
        document.getElementById('enq-req').style.display='block'
        event.preventDefault()
    }
    else if(document.getElementById('enq').value.length!=0){
        document.getElementById('enq-req').style.display='none'
    }
})
