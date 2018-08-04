const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const { TOKEN_KEY } = require("../config/keys/index");

const userSignup = (req, res) => {
	const { email, name, password } = req.body;

	User.findOne({ email }).then(user => {
		if (user) {
			return res.status(409).send({
				error: "Email already registered!"
			});
		}

		bcrypt.genSalt(10, (error, salt) => {
			bcrypt.hash(password, salt, (error, hash) => {
				if (error) {
					throw error;
				}
				const USER = new User({
					name,
					email,
					password: hash
				});

				USER.save()
					.then(user => {
						res.status(201).send({
							message: "Successfully registered"
						});
					})
					.catch(error => {
						res.status(500).send({ error });
					});
			});
		});
	});
};

const userLogin = (req, res, next) => {
	const { email, password } = req.body;

	User.findOne({ email })
		.then(user => {
			if (!user) {
				return res.status(404).send({
					error: "Incorrect email or password"
				});
			}

			const { _id, name, email, password: _password } = user;

			bcrypt.compare(password, _password, (error, isMatch) => {
				if (error) throw error;
				if (isMatch) {
					const token = jwt.sign({ _id, email }, TOKEN_KEY);

					return res
						.status(200)
						.cookie("TOKEN", token, {
							sameSite: true,
							httpOnly: true,
							expires: ""
						})
						.send({
							message: "Login successfull",
							user: { _id, name, email },
							token
						});
				} else {
					return res.status(404).send({
						error: "Incorrect email or password"
					});
				}
			});
		})
		.catch(error => {
			res.status(500).send({ error });
		});
};

const userLogout = (req, res, next) => {
	res.clearCookie("TOKEN", {
		sameSite: true,
		httpOnly: true,
		expires: ""
	})
		.status(200)
		.send("OK");
};

module.exports = { userSignup, userLogin, userLogout };