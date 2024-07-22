import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.resolve(__dirname, '../public')));

const port = process.env.PORT || 3000;

app.use('/api/hello', (req: Request, res: Response) => {
    res.json({ message: "Hello from server!" });
});

app.get('/*', (req: Request, res: Response) => {
    console.log('hi');
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
