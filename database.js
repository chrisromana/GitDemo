const {Client} = require('pg');
//const inventoryDisplay = document.querySelector('invent');

const client = new Client ({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    port: 5432,
    database: "Ebay"
});

client.connect();
client.query('SELECT * FROM inventorytest', (err, res) => {
    if(!err){
        console.log(res.rows);
    //    inventoryDisplay.innerHTML = res.rows;
    } else {
        console.log(err.message);
  //      inventoryDisplay.innerHTML = res.rows;
    }
    client.end;
})