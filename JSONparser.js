const path = require('path');
const fs = require('fs');

fs.readFile(path.join(__dirname,'/userDb/userfile.json'),(err,data)=>{
    if(!err){
        //convert string into JSON object
        var jsonData = JSON.parse(data);
        console.log(jsonData);
        console.log(jsonData.username);
        console.log(jsonData.password);
        
        //convert JSON object to String
        var stringJson = JSON.stringify(jsonData);
        console.log(stringJson);


    }
});

