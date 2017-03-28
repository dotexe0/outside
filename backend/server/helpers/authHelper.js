import passport from 'passport';
import '../modules/users/passport';

export const requireLogin = passport.authenticate('local', { session: true });
