'use strict'

class AuthController {

    /**
   * Login user.
   * POST users
   */
  async signin ({  auth,request , response}) {
    
    try {
      await auth.attempt(request.input('email'), request.input('password'))
      return response.route('FormPostController.index')
    } catch (error) {
      
    }
    
  
  }

}

module.exports = AuthController
