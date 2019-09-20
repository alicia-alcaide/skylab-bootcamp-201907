const validate = require('../../../utils/validate')
const { User, Property } = require('../../../data')

/**
 * @param {String} propertyId
 * @param {String} userId
 * 
 * @return {Promise}
 */

module.exports = function (propertyId, ownerId) {
    validate.string(propertyId, 'propertyId')
    validate.string(ownerId, 'ownerId')

    return (async () => {
        const [property, user] = await Promise.all([Property.findById(propertyId), User.findById(ownerId)])

        if (!property) throw new Error(`property does not exist`)

        if (!user) throw new Error('No permission to add new owner')

        const userFound = property.owners.find(owner => owner.toString() === ownerId)

        if (userFound) throw new Error('owner already exist')

        property.owners.push(user.id)

        await property.save()
        return property
    })()

}