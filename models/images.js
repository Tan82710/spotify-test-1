const { DataTypes } = require('sequelize');

const images = (sequelize, DataTypes) => {
	const Images = sequelize.define('images', {

		images_id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		height: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		width: {
			allowNull: false,
			type: DataTypes.INTEGER
        },
        url: {
			allowNull: false,
			type: DataTypes.STRING
		}
	});
	
	Images.associate = models => {
		Images.hasMany(models.Playlist);
	  };

	return Images
};

export default images