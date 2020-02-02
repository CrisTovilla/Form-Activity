'use strict'

/*
|--------------------------------------------------------------------------
| File Routes
|--------------------------------------------------------------------------
*/

const Route = use('Route')

Route.group(() => {
    Route.get('/:id','FileController.download')
})
    .prefix('/api/v1/file')