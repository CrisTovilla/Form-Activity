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

    Route.get('/:page','FormPostController.index')

  })
    .prefix('/api/v1/formposts')