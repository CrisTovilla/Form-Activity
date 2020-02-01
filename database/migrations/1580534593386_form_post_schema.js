'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FormPostSchema extends Schema {
  up () {
    this.create('form_posts', (table) => {
      table.increments()
      table.string('name',100).notNullable()
      table.integer('age',3).notNullable().unsigned()
      table.string('job_position',200).notNullable()
      table.string('email',50).notNullable().unique()
      table.string('phone_number',100).notNullable()
      table.string('location',100).notNullable()
      table.string('company',100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('form_posts')
  }
}

module.exports = FormPostSchema
