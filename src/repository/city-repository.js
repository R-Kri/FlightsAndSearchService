const { Where } = require('sequelize/lib/utils');
const City = require('../models/index')

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async deleteCity({ cityId }) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
        } catch (error) {
            
        }
    }
}

module.exports = CityRepository;