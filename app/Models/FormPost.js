'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FormPost extends Model {
    files(){
        return this.hasMany('App/Models/File')
    }
}

module.exports = FormPost
