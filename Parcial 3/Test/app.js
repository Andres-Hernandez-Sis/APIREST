const express       = require('express');
const cors          = require('cors');
const app           = express();
const path          = require('path');
const ruta_cliente  = require('./routes/ruta_cliente.js')
const swaggerUI     = require('swagger-ui-express');
const swaggerJsDoc  = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Clientes',
            version: '1.0.0',     
        },
        servers:[ 
                {url: "http://localhost:8082"}
            ],
    },
    apis: [`${path.join(__dirname,"./routes/ruta_cliente.js")}`],
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));


app.use(cors({origin: "*"}))
app.use(express.text())
app.use(express.json())


app.use('/cliente', ruta_cliente.router)

app.listen(8082, () =>{
    console.log("Servidor escuchando en el puerto 8082")
})

