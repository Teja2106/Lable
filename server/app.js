import express from 'express';
import cors from 'cors';
import session from 'express-session';
import crypto from 'crypto';
import pkg from 'pg';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
}));

const seshSecret = crypto.randomBytes(8).toString('hex').toUpperCase();
app.use(session({
    secret: seshSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
        expires: new Date(Date.now() + 60 * 60 * 1000),
    }
}));

const { Client } = pkg;
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'lable',
    port: 5432
});

client.connect();

const hashFunction = async (password) => {
    const saltRounds = 13;
    const salt = bcrypt.genSalt(saltRounds);
    const hashedPassword = bcrypt.hash(password, salt);
    return hashedPassword;
};

const pwdVerify = async (password, hashedPassword) => {
    const match = bcrypt.compare(password, hashedPassword);
    return match;
};

app.post('/api/signup',async (req, res) => {
    const { name, email, password } = req.body;
    const userId = uuidv4().slice(0,8);
    const hash = await hashFunction(password);
    await client.query('INSERT INTO users (id, full_name, email, passwords) VALUES ($1, $2, $3, $4)', [userId, name, email, hash]);
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    if(result.rows.length > 0) {
        const match = await pwdVerify(password, result.rows[0].password);
        if(match){
            res.status(201).json({ server: req.sessionID })
        } else {
            res.status(401).json({ server: false });
        }
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});