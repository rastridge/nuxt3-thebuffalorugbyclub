import PrimeVue from 'primevue/config'
import AutoComplete from 'primevue/autocomplete'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'
import Chart from 'primevue/chart'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DataView from 'primevue/dataview'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import FileUpload from 'primevue/fileupload'
import Image from 'primevue/image'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import Message from 'primevue/message'
import OverlayPanel from 'primevue/overlaypanel'
import Password from 'primevue/password'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import RadioButton from 'primevue/radiobutton'
import Textarea from 'primevue/textarea'
// import Toast from 'primevue/toast'
// import ToastService from 'primevue/toastservice'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(PrimeVue, { ripple: true })
	nuxtApp.vueApp.component('AutoComplete', AutoComplete)
	nuxtApp.vueApp.component('Button', Button)
	nuxtApp.vueApp.component('Card', Card)
	nuxtApp.vueApp.component('Carousel', Carousel)
	nuxtApp.vueApp.component('Chart', Chart)
	nuxtApp.vueApp.component('Checkbox', Checkbox)
	nuxtApp.vueApp.component('Column', Column)
	nuxtApp.vueApp.component('DataTable', DataTable)
	nuxtApp.vueApp.component('DataView', DataView)
	nuxtApp.vueApp.component('Dialog', Dialog)
	nuxtApp.vueApp.component('Dropdown', Dropdown)
	nuxtApp.vueApp.component('FileUpload', FileUpload)
	nuxtApp.vueApp.component('InputText', InputText)
	nuxtApp.vueApp.component('Image', Image)
	nuxtApp.vueApp.component('Menubar', Menubar)
	nuxtApp.vueApp.component('Message', Message)
	nuxtApp.vueApp.component('OverlayPanel', OverlayPanel)
	nuxtApp.vueApp.component('Password', Password)
	nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner)
	nuxtApp.vueApp.component('ProgressBar', ProgressBar)
	nuxtApp.vueApp.component('RadioButton', RadioButton)
	nuxtApp.vueApp.component('Textarea', Textarea)
	// nuxtApp.vueApp.component('Toast', Toast)
	// nuxtApp.vueApp.use('ToastService', ToastService)

	//other components that you need
})
