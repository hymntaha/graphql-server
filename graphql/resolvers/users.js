const User = require('../../models/User');

module.exports = {
  Mutation:{
    register(_, args, context, info) {
      // TODO: Validate user data
      // TODO: Make sure user doesnt already exist
      // TODO: Hash password and create an auth token

    }
  }
}
