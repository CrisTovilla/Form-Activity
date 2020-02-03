const { BasePresenter } = require('edge.js')
const url = require('url')


class FormPostPresenter extends BasePresenter {

    //Rturn wherever a filename contains pdf extension
    isImage(filename){
        return filename.split('.').pop()=="pdf"
    }

    //Appends params to the current_url
    
    append(current_url, key, value) {
        const current = url.parse(current_url)
        const params = new URLSearchParams(current.search)
    
        params.set(key, value)
        return params.toString()
    }
}

module.exports = FormPostPresenter