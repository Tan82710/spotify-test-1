const { DataTypes } = require('sequelize');

const playlist = (sequelize, DataTypes) => {
	const Playlist = sequelize.define('playlist', {

		playlist_id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		id: {
			allowNull: false,
			type: DataTypes.STRING
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING
        },
        owner_id: {
			allowNull: false,
			type: DataTypes.Object
		},
		description: {
			allowNull: false,
			type: DataTypes.STRING
        },
        images_id: {
			allowNull: false,
			type: DataTypes.ARRAY
		}
	});

	Playlist.associate = models => {
		Playlist.hasMany(models.Owner)
	}
	Playlist.associate = models => {
		Playlist.hasMany(models.Images)
	}
	
	return Playlist
};

export default playlist;