/* eslint-disable no-undef */
const { User } = require('../models');

module.exports = {
	async storage(req, res) {
		const { quota, group, email, password } = req.body;
			
		try {
			if (await User.findOne({ where: { quota: quota } })) {
				return res.status(400).json({ error: 'User already exists' });
			}
	
			const userBuild = await User.create({
				quota: quota,
				group: group,
				email: email,
				password: password,
			});
	
			return res.status(201).json(userBuild);
		} catch (err) {
			return res.status(400).json({ error: err.message });
		}
	},

	async signin(req, res) {
		const { quota, group, password } = req.body;
		const find = await User.findOne({ where: { quota: quota } });

		try {
			if (!find) {
				return res.status(404).json({ error: 'User not found' });
			}else if((find.password != password) || (find.group != group)) {
				return res.status(403).json();
			}

			return res.status(302).json();
		} catch (err) {
			return res.status(400).json({ error: err.message });
		}
	},
};

