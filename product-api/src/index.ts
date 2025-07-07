require('dotenv').config();
import express from 'express'
import cors from 'cors'
import {productRouter} from "./routes/products";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productRouter)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is working: http://localhost:${PORT}`);
});
