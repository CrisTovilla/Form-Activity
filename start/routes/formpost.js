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

    Route.delete('/:id','FormPostController.destroy')
    
  })
    .prefix('/api/v1/formposts')

Route.get('/admin','FormPostController.index')