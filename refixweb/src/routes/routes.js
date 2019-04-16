import Home from '../components/Home.vue'
import Status from '../components/contents/Status.vue'
import Message from '../components/contents/Message.vue'
import Profile from '../components/contents/Profile.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/contents', component: Status},
    {path: '/contents', component: Message},
    {path: '/contents', component: Profile}
]