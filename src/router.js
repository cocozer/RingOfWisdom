import HomePage from '@/pages/Home.vue'
import CreaturesPage from '@/pages/Creatures.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/Creatures',
        name: 'CreaturesPage',
        component: CreaturesPage,
    },
]

export default routes