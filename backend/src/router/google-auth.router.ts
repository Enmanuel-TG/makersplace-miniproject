import { Router } from 'express';
import passport from '../controllers/google.controller.ts';

const router = Router();
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (_req, res) => {
  res.redirect('/');
});

export default router;
