'use strict'

/*
|--------------------------------------------------------------------------
| FormPost Routes
|--------------------------------------------------------------------------
*/

const Route = use('Route')

Route.group(() => {
    Route.post('','FormPostController.store')
    .validator('StoreFormPost')
  
  })
    .prefix('/api/v1/formposts')