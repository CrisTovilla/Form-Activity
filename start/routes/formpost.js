'use strict'

/*
|--------------------------------------------------------------------------
| FormPost Routes
|--------------------------------------------------------------------------
*/

const Route = use('Route')

Route.group(() => {
    Route.post('','FormPostController.store')
  
  })
    .prefix('/api/v1/formposts')