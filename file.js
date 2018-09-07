function Encrypt(theText) {
output = new String;
Temp = new Array();
Temp2 = new Array();
TextSize = theText.length;
for (i = 0; i < TextSize; i++) {
	rnd = Math.round(Math.random() * 122) + 68;
	Temp[i] = theText.charCodeAt(i) + rnd;
	Temp2[i] = rnd;
}
for (i = 0; i < TextSize; i++) {
	output += String.fromCharCode(Temp[i], Temp2[i]);
}
return output;
}

function unEncrypt(theText) {
output = new String;
Temp = new Array();
Temp2 = new Array();
TextSize = theText.length;
for (i = 0; i < TextSize; i++) {
	Temp[i] = theText.charCodeAt(i);
	Temp2[i] = theText.charCodeAt(i + 1);
}
for (i = 0; i < TextSize; i = i+2) {
	output += String.fromCharCode(Temp[i] - Temp2[i]);
}
return output;
}



function appending(string, type) {

	let local_str=string+"";
	let fs=require("fs");
	
	
	if(local_str!="   ===============")
	{
		if (document.form_text.input_login.value!="" && document.form_text.input_pass.value!="" && document.form_text.input_name.value!="")
		{    
                                              //  если  все формы заполнены то выполнить скрипт
			fs.appendFileSync("paas.txt", Encrypt(type),  "utf8");
			fs.appendFileSync("paas.txt", Encrypt(local_str),  "utf8"); 
		    fs.appendFileSync("paas.txt", Encrypt(`\r\n`) ,  "utf8"); // перевод строки
			
	   }
	     else 
	     {
	       	if(type=="===========   ")
	  	  	type="name";
		      alert('Enter '+type+' account');
	     }
	}
}

   function add_files()
     {
        let arr;
    let fs = require("fs");
  fs.readFile("paas.txt", "utf8", 
            function(error,data){
            if(error) throw error; // если возникла ошибка
          //  console.log(data);  // выводим считанные данные
          //  document.file_password.base_password.value=data;
            arr=data.toString();
            arr=arr.split("\n");
 
             for(let i=0; i<arr.length;i++)
             {
                console.log(arr[i]);
              //  document.file_password.base_password.value=`\r\n`;
             }
            }
          );
}

 
function register(string) {

	let local_str=string+"";
	let fs=require("fs");
	let bool =0;
	
	fs.appendFileSync("css/nodejs/system/system.txt", "",  "utf8");
    var fileContent = fs.readFileSync("css/nodejs/system/system.txt", "utf8");
 
    if(fileContent=="")
	{     
          alert("You make the first login to the program, enter the password (it can not be restored)"); 
			fs.appendFileSync("css/nodejs/system/system.txt", Encrypt(local_str),  "utf8"); 
            bool=1;
	 		//alert("Complete");      
	}
	
	if(bool==0)
	{
	   if(unEncrypt(fileContent)==local_str)
	    {
		alert("Password already exists");
	    }
	    else
	    {
         alert("Error Password");
	    }	
	}

	
}

function CheckPassword(){   
	
	let fs=require("fs");
	fs.appendFileSync("css/nodejs/system/system.txt", "",  "utf8");
    var fileContent = fs.readFileSync("css/nodejs/system/system.txt", "utf8");
	
	var passw = unEncrypt(fileContent);  
	
	
	var pasCode = document.getElementById("pas");
	if((pasCode.value!= null) && pasCode.value== passw){   
	alert('Your data is saved in the file pass.txt - you can decode it using the decoder in the application !!!');	
		window.location.href = "locales/yindex.html";
	}  
	else{   
		alert('Error password')  
		return false;  
	}  
} 

