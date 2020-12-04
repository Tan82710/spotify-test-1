const { DataTypes } = require('sequelize');

const external_urls = (sequelize, DataTypes) => {
	const External_urls = sequelize.define('external_urls', {

		external_urls_id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		spotify: {
			allowNull: false,
			type: DataTypes.STRING
		}
	});

	External_urls.associate = models => {
		External_urls.belongsTo(models.Owner);
	  };

	return External_urls
};

export default external_urls