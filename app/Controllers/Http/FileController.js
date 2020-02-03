'use strict'


const File= use('App/Models/File')
const Helpers = use('Helpers')

class FileController {

      /**
   * Download a file 
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async download ({ request, params, response }) {
    //retireve id params
    let {id} = params
    //search for the object file
    const file =  await File.findOrFail(id)
    //return the file to the client 
    return response.attachment(
        Helpers.publicPath('uploads/files-'+file.form_post_id+'/'+file.filename)
    )
  }
}

module.exports = FileController
