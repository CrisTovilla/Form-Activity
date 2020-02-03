'use strict'

/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
*/

const Route = use('Route')

Route.group(() => {
    Route.post('','AuthController.signin')

    Route.get('','AuthController.logout')
})
    .prefix('/api/v1/auth')