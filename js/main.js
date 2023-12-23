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
    <td><button class="btn btn-visit" id='visitButton' onclick ='visit()'>
    <i class='fa-solid fa-eye pe-2'></i>
    Visite</button></td>
    <td><button class="btn btn-danger" onclick="deleteSite(${i})">
    <i class="fa-solid fa-trash"></i>
    Delete</button></td>
    </tr>
    `
    document.getElementById('tableBody').innerHTML = cartona;
}
}



function visit() {
    for(var i=0;i<siteContainer.length;i++) {
        open('https://www.'+siteContainer[i].name+'.com');
    }
}


// function visit(x) {
//     var x = prompt();
//     console.log(x);
//    open('https://'+x+'.com');
// }

// function visit() {

//     window.open(siteContainer[1].name);
// }