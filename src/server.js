import express from 'express';
import router from './roter/routers.js';

const app = express();
app.use(express.json());
app.use(router)
const PORT = process.arv.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
