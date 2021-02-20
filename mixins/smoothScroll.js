import Scrollbar from 'smooth-scrollbar'

export default {
  mounted () {
    this.setSmoothScroll()
  },
  methods: {
    setSmoothScroll () {
      Scrollbar.init(document.querySelector('.smoothLayer'), {
        alwaysShowTracks: true,
        continuousScrolling: true,
        renderByPixels: true,
        damping: 0.1,
        thumbMinSize: 20
      })
    }
  }
}
