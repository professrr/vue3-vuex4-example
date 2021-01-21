import {createStore} from 'vuex'
import ReponseError from './modules/ReponseError'
import ReponseOk from './modules/ReponseOk'
import Auth from './modules/Auth'

export default createStore({
    modules: {
        ReponseError, ReponseOk, Auth
    }
})