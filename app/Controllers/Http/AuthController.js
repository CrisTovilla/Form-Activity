'use strict'

class AuthController {

    /**
   * Login user.
   * POST users
   */
  async signin ({  auth,request}) {
    return await auth.attempt(request.input('email'), request.input('password'))
  }

}

module.exports = AuthController
