'use strict'

/*
|--------------------------------------------------------------------------
| View Routes
|--------------------------------------------------------------------------
*/


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')

Route.on('/login').render('login')
