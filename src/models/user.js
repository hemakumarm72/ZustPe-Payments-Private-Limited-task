export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      unique: true,
      primaryKey: true,

    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    timestamp: true,
    freezeTableName: true,
  },);

  return User;
};
