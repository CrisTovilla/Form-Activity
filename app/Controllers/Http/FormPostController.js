'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Drive = use('Drive')
const FormPost= use('App/Models/FormPost')
const File= use('App/Models/File')
const Helpers = use('Helpers')
/**
 * Resourceful controller for interacting with formposts
 */
class FormPostController {

    /**
   * setup
   */
  constructor () {
    this.page = 1
    this.perPage = 1
  }
  /**
   * Show a list of all formposts.
   * GET formposts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, auth ,params, view , response }) {
    try {
      // name search
     let { page, perPage } = request.all()
     //console.log(request)
     page = page || this.page
     perPage = perPage || this.perPage
     // prepare statement
     let query = FormPost.query()
     query.with('files')

     //execute query
     let posts = await query.paginate(page, perPage)

     return view.presenter('FormPostPresenter')
     .render('admin', {
      posts: posts.toJSON()
     })
    } catch (error) {
      return response.status(500).send('Server Error')  
    }
  }



  /**
   * Create/save a new formpost.
   * POST formposts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response , view}) {
    //get data from request
    let {name ,age ,job_position ,email , phone_number ,location ,company} = request.only(['name','age','job_position','email','phone_number','location','company'])
    const file_posts = request.file('files_post')
    try {
      //insert the object into the database
      const formpost = await FormPost.create({
        name ,
        age ,
        job_position ,
        email , 
        phone_number ,
        location ,
        company
      })

      //will save files only if there is
      if(file_posts){

        //Saing files on server-side
        await Promise.all(
          file_posts.files.map(async file => {
              //Keep names on pdf
              let filename
              if(file.subtype!="pdf")
                filename = `FormPost File ${new Date().getTime()}.${file.subtype}`
              else
                filename = file.clientName
              await file.move(Helpers.publicPath('uploads/files-'+formpost.id), {
                  name: filename
              })
          })
        )
        //check whatever an error ocurred
        if (!file_posts.movedAll()) {
          return file_posts.errors()
        }

        //for each file create an object into the database
        for (let i = 0 ; i < file_posts._files.length ; i++){
          let element = file_posts._files[i]
          await File.create({
            form_post_id: formpost.id,
            filename : element.fileName
         })
        }
      }
      return view.render('home-acepted')
    } catch (error) {
      return response.status(500).send('Server Error')
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
  async destroy ({ params, request, response , view}) {
    //retrieve id 
    let { id } = params

    try {
      //Serach for the objects into the database with id
      const formpost = await FormPost.findOrFail(id)
      const files = await File
          .query()
          .where('form_post_id', '=', id)
          .fetch()
      
      //Delete the folder and the post
      await Drive.delete('files-'+formpost.id)     
      await formpost.delete()
      return response.status(200).json(formpost)
    } catch (error) {
      return response.status(500).send('Server Error')
    }


    
  }
}

module.exports = FormPostController
