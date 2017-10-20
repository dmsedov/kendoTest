export default (sequelize, Sequelize) => {
  const Users = sequelize.define('users', {
    user_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    nickname: { type: Sequelize.STRING, unique: false, allowNull: false },
    age: { type: Sequelize.INTEGER, unique: false, allowNull: false },
  }, {
    timestamps: false,
  });
  return Users;
};
