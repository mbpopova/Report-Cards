import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {StudentappComponent} from './studentapp.component'
import {ROUTER_PROVIDERS} from 'angular2/router'



bootstrap(StudentappComponent, [ROUTER_PROVIDERS]);