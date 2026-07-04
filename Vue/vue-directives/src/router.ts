import {createRouter , createWebHistory} from 'vue-router'
import velse from './components/velse.vue'
import velseif from './components/velseif.vue'
import home from './components/home.vue'
import vtext from './components/vtext.vue'
import vhtml from './components/vhtml.vue'
import vshow from './components/vshow.vue'
import vfor from './components/vfor.vue'
import von from './components/von.vue'
import vbind from './components/vbind.vue'
import vmodel from './components/vmodel.vue'
import vslot from './components/slot/vslot.vue'
import vpre from './components/vpre.vue'
import vonce from './components/vonce.vue'
import vmemo from './components/vmemo.vue'
import vcloak from './components/vcloak.vue'





const routes = [
    {path: '/', component: home},
    { path: '/else', component: velse },
    { path: '/elseif', component: velseif },
    { path: '/txt', component: vtext },
    { path: '/htm', component: vhtml },
    { path: '/show', component: vshow },
    { path: '/for', component: vfor },
    { path: '/on', component: von },
    { path: '/bind', component: vbind },
    { path: '/model', component: vmodel },
    { path: '/slot', component: vslot },
    { path: '/pre', component: vpre },
    { path: '/once', component: vonce },
    { path: '/memo', component: vmemo },
    { path: '/cloak', component: vcloak },


];

const router = createRouter({
    history: createWebHistory(),
    routes
}); 

export default router;