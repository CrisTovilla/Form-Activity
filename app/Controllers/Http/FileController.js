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
    let {id} = params
    const file =  await File.findOrFail(id)
    return response.attachment(
        Helpers.publicPath('uploads/files-'+file.form_post_id+'/'+file.filename)
    )
  }
}

module.exports = FileController
