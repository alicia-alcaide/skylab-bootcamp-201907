module.exports = {
    registerUser: require('./user/register'),
    authenticateUser: require('./user/authenticate'),
    retrieveUser: require('./user/retrieve'),
    updateUser: require('./user/update'),
    unregisterUser: require('./user/unregister'),

    searchRecipe: require('./recipe/search'),
    retrieveRecipe: require('./recipe/retrieve'),

    registerDay: require('./day/register-day'),
    retrieveDay: require('./day/retrieve'),

    //retrieveWeek: require('./week/retrieve')
}
