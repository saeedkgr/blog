import { onMounted, onUnmounted } from 'vue'

export default function useLtr(selector = '.content-container') {
  onMounted(() => {
    const cc = document.querySelector(selector)
    cc.style.direction = 'ltr'
    console.log(cc.style, cc, `the component is now mounted.`)
  })
  onUnmounted(() => {
    const cc = document.querySelector(selector)
    cc.style.direction = ''
    console.log(cc.style, cc, `the component is now unmounted.`)
  })
}
