const { DataTypes } = require('sequelize');

 const owner = (sequelize, DataTypes) => {
	const Owner = sequelize.define('owner', {

		owner_id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		display_name: {
			allowNull: false,
			type: DataTypes.STRING
        },
        href: {
			allowNull: false,
			type: DataTypes.STRING
		},
		id: {
			allowNull: false,
			type: DataTypes.INTEGER
        },
        type: {
			allowNull: false,
			type: DataTypes.STRING
        },
        uri: {
			allowNull: false,
			type: DataTypes.STRING
        },
        external_urls_id: {
			allowNull: false,
			type: DataTypes.ARRAY
		}
	});

	Owner.associate = models => {
		Owner.hasMany(models.External_urls);
	  };
	Owner.associate = models => {
		Owner.belongsTo(models.Playlist);
	  };

	return Owner
};

export default owner