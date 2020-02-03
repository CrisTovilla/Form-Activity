'use strict'

class AuthController {

    /**
   * Login user.
   * POST auth
   */
  async signin ({  auth,request , response}) {
    
    try {
      await auth.attempt(request.input('email'), request.input('password'))
      return response.redirect('/admin')
    } catch (error) {
      console.log(error)
      return response.redirect('/login')
    }
    
  
  }

  
    /**
   * Logout user.
   * Get Auth
   */
  async logout ({  auth,request , response}) {
      await auth.logout()
      return response.redirect('/login')
  }

}

module.exports = AuthController
