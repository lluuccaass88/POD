const mysql = require('mysql2'); 

let databaseConnecting = {
    connection: db = mysql.createConnection({
        host: "143.198.15.207",
        user: "ADS_AULA",
        password: "Ads123!!!",
        database: "ADS_AULA",
    }),
    connecting : () =>{
        db.connect((err) => {
            if (err) {
                console.log("Error occurred", err);
            } else {
                console.log("Connected to MySQL Server");
        
            }
        });
    }    
    
}

module.exports = databaseConnecting;