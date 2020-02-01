'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const FormPost= use('App/Models/FormPost')
const File= use('App/Models/File')
const Helpers = use('Helpers')
/**
 * Resourceful controller for interacting with formposts
 */
class FormPostController {
  /**
   * Show a list of all formposts.
   * GET formposts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }



  /**
   * Create/save a new formpost.
   * POST formposts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let {name ,age ,job_position ,email , phone_number ,location ,company} = request.only(['name','age','job_position','email','phone_number','location','company'])
    const file_posts = request.file('files_post')
    try {
      const formpost = await FormPost.create({
        name ,
        age ,
        job_position ,
        email , 
        phone_number ,
        location ,
        company
      })
      if(file_posts){
        await file_posts.moveAll(Helpers.tmpPath('uploads/files-'+formpost.id), (file) => {
          return {
            name: `FormPost File ${new Date().getTime()}.${file.subtype}`
          }
        })

        if (!file_posts.movedAll()) {
          return file_posts.errors()
        }

        for (let i = 0 ; i < file_posts._files.length ; i++){
          let element = file_posts._files[i]
          await File.create({
            form_post_id: formpost.id,
            filename : element.fileName
         })
        }


      }
      return response.redirect('/')
    } catch (error) {
      console.log(error)
      return response.status(404)
    }
  }

 

  /**
   * Delete a formpost with id.
   * DELETE formposts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = FormPostController
