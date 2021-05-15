
var input = document.getElementById("myFile");
var output = document.getElementById("output");


input.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    var reader = new FileReader();
    
    reader.addEventListener('load', function (e) {
      output.textContent = e.target.result;
    });
    
    reader.readAsBinaryString(myFile);
  }   
});



jQuery(document).ready(function(){
$('#submit2').click(function ()
{

  
var request = new XMLHttpRequest();

request.open('POST', 'https://payeer.com/ajax/api/api.php');

request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);

//var json = JSON.stringify(this.responseText);
//console.log(string);
// => {"name":"X","born":1990}

var obj = JSON.parse(this.responseText);

var usdx = obj.balance.USD.total;
var rubx = obj.balance.RUB.total;
console.log(usdx);
console.log(rubx);

  }
};

var body = "action=getBalance&account=P1017375795&apiId=1012539042&apiPass=anhem@123&language=en";
request.send(body);


    alert(usdx);
    //here ajax
});
});


