/* eslint-disable no-undef */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
		email: DataTypes.STRING,
		group: DataTypes.STRING,
    quota: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return User;
};
