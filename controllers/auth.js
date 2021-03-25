const passport = require('passport');
const jwt = require('jsonwebtoken');

const registerController = [
  passport.authenticate('register', { session: false }),
  (req, res) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  }
];

const loginController = (req, res, next) => {
  passport.authenticate(
    'login',
    (err, user, info) => {
      console.log(info);
      try {
        if (err || !user) {
          const error = new Error('An error occurred.');

          return next(error);
        }

        req.login(
          user,
          { session: false },
          (error) => {
            if (error) return next(error);

            const body = { _id: user._id, email: user.email };
            const token = jwt.sign({ user: body }, process.env.SECRET);

            // set cookie
            res.cookie('token', token, {
              expires: new Date(Date.now() + 604800000),
              secure: false, // set to true if your using https
              httpOnly: true,
            });
            return res.json({ token });
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
};

module.exports = { registerController, loginController };
