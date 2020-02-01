'use strict'

class StoreFormPost {
  get rules () {
    return {
      // validation rules
      name:'required|max:100',
      age: 'required|max:2',
      job_position: 'required|max:200',
      email: 'required|email|max:254|unique:form_posts,email',
      phone_number: 'required|max:15',
      location: 'required|max:100' ,
      company: 'required|max:100',
      'files_post.*': 'file|file_ext:pdf,jpeg,jpg|file_size:5mb'
    }
  }



}

module.exports = StoreFormPost
