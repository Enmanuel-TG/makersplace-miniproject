import 'dotenv/config.js';

//-------------------------ENV-------------------------------------
export const TOKEN_SECRET = process.env.TOKEN_SECRET || 'SECRET';
export const DATABASE_URL =
  process.env.DATABASE_URL || 'postgresql://my_user:my_password@localhost:5432/my_database?schema=public';
export const PORT = Number(process.env.PORT) || 1234;
export const TOKEN_EXPIRES = process.env.TOKEN_EXPIRES || '7d';
export const CLOUDINARY_NAME = process.env.CLOUD_NAME;
export const KEY = process.env.API_KEY;
export const SECRET = process.env.API_SECRET;
export const enum ROLES {
  admin = 'admin',
  user = 'user',
}
export const GOOGLE_CLIENT_ID = String(process.env.GOOGLE_CLIENT_ID);
export const GOOGLE_CLIENT_SECRET = String(process.env.GOOGLE_CLIENT_SECRET);
export const SESSION_SECRET = String(process.env.SESSION_SECRET);
export const URL_CALLBACK = process.env.URL_CALLBACK;

//-------------------------CONST-------------------------------------
export const LEGAL_AGE = 18;
export const NAME_TOKEN = 'token';
export const PHOTO_PROFILE_FOLDER = 'ftProfile';
export const PHOTOS_PRODUCT_FOLDER = 'ftProduct';
export const IMG_DEFAULT =
  'https://res.cloudinary.com/dvqevobqi/image/upload/v1708961063/Default/30349e17-b84b-4ae7-ae0e-db4802a3dcfd.png';
