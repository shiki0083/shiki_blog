<template>
  <p
    :id="idName"
    :style="{fontSize: countSize, fontWeight: countWeight, color: color}"
  >{{ startVal }}</p>
</template>
<script>
import CountUp from 'countup'
export default {
  props: {
    idName: String,
    endVal: Number,
    color: String,
    countSize: {
      type: String,
      default: '40px'
    },
    countWeight: {
      type: Number,
      default: 700
    },
    startVal: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 500
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        const numAnim = new CountUp(this.idName, this.startVal, this.endVal)
        if (!numAnim.error) {
          numAnim.start()
        } else {
          console.error(numAnim.error)
        }
      }, this.delay)
    })
  },
  watch: {
    endVal (newVal, oldVal) {
      this.$nextTick(() => {
        setTimeout(() => {
          const numAnim = new CountUp(this.idName, this.startVal, newVal)
          if (!numAnim.error) {
            numAnim.start()
          } else {
            console.error(numAnim.error)
          }
        }, this.delay)
      })
    }
  }
}
</script>
