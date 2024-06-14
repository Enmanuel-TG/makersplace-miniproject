import 'dotenv/config.js';
import { PORT, SESSION_SECRET } from './utilities/consts.utility';
import authRouter from './router/auth.router';
import googleAuthRouter from './router/google-auth.router';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import session from 'express-session';
import passport from './controllers/google.controller';
import userRouter from './router/user.router';
import productRouter from './router/product.router';
import rolesRouter from './router/roles.router';

const app: express.Application = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './photos',
  }),
);

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (_req: Request, res: Response) => {
  res.send('Hi, world!');
});

app.use('/api/auth', authRouter);
app.use('/api/authGoogle', googleAuthRouter);

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/roles', rolesRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running in port ${PORT}`);
});
