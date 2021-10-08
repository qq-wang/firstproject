export default {
  data() {
    return { globalLoading: '' }
  },
  methods: {
    // 全局loading
    showgl(text) {
      this.globalLoading = this.$loading({
        lock: true,
        text: `${text}...`,
        background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    // 关闭全局loading
    closegl() {
      if (this.globalLoading) {
        this.globalLoading.close()
        this.globalLoading = ''
      }
    }
  }
}
