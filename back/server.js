const express = require('express')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: process.env.URL || "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "Félicitations Philippe, tu as enfin trouvé comment lancer une app avec son serveur back !" })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port ${PORT}.`)
})
