"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate(models) {
      Roles.belongsToMany(models.Usuario, {
        through: models.RolesUsuarios,
        as: "usuarios",
        foreignKey: "rol_id",
        otherKey: "usuario_id",
      });
      Roles.belongsToMany(models.Tramite, {
        through: models.RolesTramites,
        as: "tramites",
        foreignKey: "rol_id",
        otherKey: "tramite_id",
      });
      Roles.belongsToMany(models.Permiso, {
        through: models.RolesPermisos,
        as: "permisos",
        foreignKey: "rol_id",
        otherKey: "permiso_id",
      });
    }
  }
  Roles.init(
    {
      rol: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Roles",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Roles;
};
