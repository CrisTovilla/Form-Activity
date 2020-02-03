'use strict'

/*
|--------------------------------------------------------------------------
| File Routes
|--------------------------------------------------------------------------
*/

const Route = use('Route')

Route.group(() => {
    Route.get('/:id','FileController.download')
    .middleware('auth_session')
})
    .prefix('/api/v1/file')