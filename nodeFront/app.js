const express = require('express')
const axios = require('axios')

const app = express()
const port = 8080


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json())



app.get('/viewall', (req, res) => {

    let clients

    async function getUser() {//Recebendo
        try {
             clients = await axios.get('http://localhost:3000/clients/searchAll');//Recebendo com axios
            console.log(clients); //Mostra todo o objeto
            
            res.render('home', {clients: clients})

        } catch (error) {
            console.error(error);
        }
      }

      getUser()
        
})


app.listen(port, () => {
  console.log(`Server run in port: ${port}`)
})

