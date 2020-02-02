'use strict'

/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
*/

const Route = use('Route')

Route.group(() => {
    Route.post('','AuthController.signin')
})
    .prefix('/api/v1/auth')