import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import { prisma } from '../utilities/prisma.utility.ts';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, IMG_DEFAULT, URL_CALLBACK } from '../utilities/consts.utility';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: URL_CALLBACK,
    },
    async (_accessToken: string, _refreshToken: string, profile: Profile, done) => {
      try {
        let user = await prisma.user.findUnique({
          where: { email: profile.emails![0].value },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              name: profile.displayName,
              email: profile.emails![0].value,
              password: '',
              birthday: new Date(),
              phoneNumber: '',
              photo: IMG_DEFAULT,
            },
          });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
