var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var tableBody = document.getElementById('tableBody');
var visitButton = document.getElementById('visitButton');
var siteContainer = [];

if(localStorage.getItem('bookmarksList')  != null ) {
    siteContainer =JSON.parse(localStorage.getItem('bookmarksList')); // zbon adim
    displayData(siteContainer);
}

var site = {
    name:siteName.value,
    url:siteUrl.value,
}

function addSite() {
    var site = {
        name:siteName.value,
        url:siteUrl.value,
    }
    siteContainer.push(site);
    localStorage.setItem("bookmarksList", JSON.stringify(siteContainer));
    clearForm();
    displayData(siteContainer);
}

function clearForm() {
    siteName.value ='';
    siteUrl.value ='';
}

function deleteSite(index) {
    siteContainer.splice(index,1);
    localStorage.setItem('bookmarksList',JSON.stringify(siteContainer))
    displayData(siteContainer);
}

function displayData() {
var cartona = '';
for ( var i = 0; i<siteContainer.length ; i++ ){
    cartona += `
    <tr class="">
    <td scope="row">${i+1}</td>
    <td>${siteContainer[i].name}</td>
    <td><a href='${siteContainer[i].url}' class="btn btn-visit" id='visitButton' >
    <i class='fa-solid fa-eye pe-2'></i>
    Visite</a></td>
    <td><button class="btn btn-danger" onclick="deleteSite(${i})">
    <i class="fa-solid fa-trash"></i>
    Delete</button></td>
    </tr>
    `
    document.getElementById('tableBody').innerHTML = cartona;
}
}


function validNum() {
    var text  = siteName.value;
    var regwxName = /^[A-Z][a-z]{3,10}$/;
    if(regwxName.test(text)==true) { //valid
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
    }
    else {
        siteName.classList.add('is-invalid');
        siteName.classList.remove('is-valid');
    }
    console.log(redwxName.test(text))
}


// /*
// ? Dom (element - even - action) - hover = (mouseenter+mouseleave)
// ! Events
// - click
// - mousedown لما تحط الماوس على العنصر
// - mouseup لما تشيل الماوس من العنصر
// - mousemove => moving mouse in element لما تحرك الماوس جوا العنصر
// - mouseenter => when mouse become in element لما الماوس يلمس العنصر
// - mouseleave => when mouse leave element تشيل ايدك من الزرار
// - contextmenue => right click 

// - keydown => when click in any button in keyboard تضغط على زرار
// - keyup => when leave in any letter in keyboard   تشيل ايدك 
// - keypreess => click in letters only حروف فقط

// - focus => when focus input 
// - blue => when stop focus لما تخرج من العنصر
// - submit => when click submit
// - drag => when drag image


// */

// /*
// !notes
// * e.preventDefault(); => to remove default behavior
// * atts: contenteditable => convert element to input
// */

