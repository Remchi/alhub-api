import express from "express";
import User from "../models/User";
import parseErrors from "../utils/parseErrors";
import { sendConfirmationEmail } from "../mailer";
import authenticate from "../middlewares/authenticate";

const router = express.Router();

router.post("/", (req, res) => {
  const { email, password, username } = req.body.user;
  const user = new User({ email, username });
  user.setPassword(password);
  user.setConfirmationToken();
  user
    .save()
    .then(userRecord => {
      sendConfirmationEmail(userRecord);
      res.json({ user: userRecord.toAuthJSON() });
    })
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

router.get("/current_user", authenticate, (req, res) => {
  res.json({
    user: {
      email: req.currentUser.email,
      confirmed: req.currentUser.confirmed,
      username: req.currentUser.username
    }
  });
});

export default router;
