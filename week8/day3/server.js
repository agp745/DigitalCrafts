const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")
const moviesRouter = require("./routers/movies")

app.engine("mustache", mustacheExpress())

app.set("views", "./views")
app.set("view engine", "mustache")

app.use(express.urlencoded())
app.use(moviesRouter)

app.listen(3000, () => {
    console.log("listening on http://localhost:3000")
})
