import dotenv from 'dotenv';
dotenv.config();

export const BACKEND_URL= process.env.NODE_ENV === 'development'?"http://localhost:5000": "mongodb+srv://Kable:<password>@cluster0.g8oc5.mongodb.net/<dbname>?retryWrites=true&w=majority"