import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { defineCustomElement as defineEuiAutoComplete } from 'ensemble-ui/components/eui-auto-complete.js'
import { defineCustomElement as defineEuiBadge } from 'ensemble-ui/components/eui-badge.js'
import { defineCustomElement as defineEuiBreadcrumb } from 'ensemble-ui/components/eui-breadcrumb.js'
import { defineCustomElement as defineEuiButton } from 'ensemble-ui/components/eui-button.js'
import { defineCustomElement as defineEuiIcon } from 'ensemble-ui/components/eui-icon.js'

import 'ensemble-ui/styles.css';
import './style.css'
import './pages/page.css'
import App from './App.vue'
import { docs } from './docs'
import AutoCompletePage from './pages/autocomplete.vue'
import BadgePage from './pages/badge.vue'
import BreadcrumbPage from './pages/breadcrumb.vue'
import ButtonPage from './pages/button.vue'
import CalendarPage from './pages/calendar.vue'
import DocPlaceholderPage from './pages/DocPlaceholderPage.vue'
import Card from './pages/card.vue'
import Input from './pages/input.vue'
import Knob from './pages/knob.vue'
import Paginator from './pages/paginator.vue'
import Progressbar from './pages/progressbar.vue'
import Radio from './pages/radio.vue'
import Sidenav from './pages/sidenav.vue'
import Slider from './pages/slider.vue'
import Snackbar from './pages/snackbar.vue'
import Stat from './pages/stat.vue'
import Stepper from './pages/stepper.vue'
import Tab from './pages/tab.vue'
import Table from './pages/table.vue'
import Textarea from './pages/textarea.vue'
import Toggle from './pages/toggle.vue'
import Tree from './pages/tree.vue'
import Icon from './pages/icon.vue'
import Datepicker from './pages/datepicker.vue'
import EmptyState from './pages/empty-state.vue'
import ColorPicker from './pages/color-picker.vue'
import Dropdown from './pages/dropdown.vue'
import Chips from './pages/chips.vue'
import Checkbox from './pages/checkbox.vue'
import Dialogue from './pages/dialogue.vue'
import Font from './pages/font.vue'
import Feed from './pages/feed.vue'

defineEuiIcon()
defineEuiButton()
defineEuiAutoComplete()
defineEuiBadge()
defineEuiBreadcrumb()

const implementedPages = {
    '/autocomplete': AutoCompletePage,
    '/badge': BadgePage,
    '/bread': BreadcrumbPage,
    '/button': ButtonPage,
    '/calendar': CalendarPage,
    '/card': Card,
    '/chips': Chips,
    '/checkbox': Checkbox,
    '/color': ColorPicker,
    '/datepicker': Datepicker,
    '/dropdown': Dropdown,
    '/dialogue': Dialogue,
    '/empty': EmptyState,
    '/font': Font,
    '/feed': Feed,
    '/input': Input,
    '/icon': Icon,
    '/knob': Knob,
    '/paginator': Paginator,
    '/progressbar': Progressbar,
    '/radio': Radio,
    '/sidenav': Sidenav,
    '/slider': Slider,
    '/snackbar': Snackbar,
    '/stat': Stat,
    '/stepper': Stepper,
    '/tab': Tab,
    '/table': Table,
    '/textarea': Textarea,
    '/toggle': Toggle,
    '/tree': Tree
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: { render: () => null } },
        ...docs.map((doc) => {
            const component = implementedPages[doc.path as keyof typeof implementedPages] ?? DocPlaceholderPage

            return {
                path: doc.path,
                name: doc.path.slice(1),
                component,
                props: component === DocPlaceholderPage ? { title: doc.label } : false,
            }
        }),
        { path: '/:pathMatch(.*)*', redirect: '/' },
    ],
})

createApp(App).use(router).mount('#app')
