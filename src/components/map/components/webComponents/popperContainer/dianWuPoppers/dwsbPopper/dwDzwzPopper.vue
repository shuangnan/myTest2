<template>
  <div style="height: 100%; width: 100%; display: flex; flex-direction: column">
    <div style="height: 85.3px; width: 100%; padding: 10px; display: flex; flex-direction: row">
      <div :style="dw_dzwz"></div>
      <div style="height: 100%; width: calc(100% - 83px); display: flex; flex-direction: column; align-items: center; justify-content: center">
        <span style="font-size: 16px; font-weight: bold">大宗物资</span>
        <span style="margin-top: 5px; font-weight: bold">{{ content.LOCATION }}</span>
      </div>
    </div>
    <div style="height: calc(100% - 125px); width: calc(100% - 20px); padding: 10px; border-top: 1px solid gray">
          <div style="height: 100%; width: 100%; display: flex; flex-direction: column; align-content: center; align-items: center; justify-content: center">
            <!-- <div style="height: 40px; width: 100%; display: flex; flex-direction: row; align-content: center; align-items: center; justify-content: space-around"> -->
              <!-- <el-input v-model="searchData" size="mini" placeholder="搜索大宗物资信息..."></el-input> -->
              <!-- <el-button @click="jumpToMaintainPage" size="mini" type="primary">维护</el-button> -->
            <!-- </div> -->
            <div style="width: 100%; height: 30px; display: flex; flex-direction: row; align-items: center; align-content: center; justify-content: center">
              <div style="width: 16%; display: flex; align-items: center; align-content: center; justify-content: center">
                <span style="font-weight: bold; font-size: 14px; color: #4eabf8">区域</span>
              </div>
              <div style="width: 16%; display: flex; align-items: center; align-content: center; justify-content: center">
                <span style="font-weight: bold; font-size: 14px; color: #4eabf8">设备类型</span>
              </div>
              <div style="width: 16%; display: flex; align-items: center; align-content: center; justify-content: center">
                <span style="font-weight: bold; font-size: 14px; color: #4eabf8">数量</span>
              </div>
              <div style="width: 16%; display: flex; align-items: center; align-content: center; justify-content: center">
                <span style="font-weight: bold; font-size: 14px; color: #4eabf8">计量单位</span>
              </div>
              <div style="width: 16%; display: flex; align-items: center; align-content: center; justify-content: center">
                <span style="font-weight: bold; font-size: 14px; color: #4eabf8">规格</span>
              </div>
			  <div style="width: 16%; display: flex; align-items: center; align-content: center; justify-content: center">
			    <span style="font-weight: bold; font-size: 14px; color: #4eabf8">备注</span>
			  </div>
            </div>
            <div style="width: 100%; height: calc(100% - 60px); overflow-y: scroll; display: flex; flex-direction: column; align-content: center; align-items: center; justify-content: flex-start">
              <div v-for="(c, index) in details" :key="index" style="margin-bottom: 5px; width: 100%; display: flex; flex-direction: row; align-items: center; align-content: center; justify-content: center">
                <div style="width: 16%; display: flex; align-content: center; align-items: center; justify-content: center">
                  <span>{{ c.DISTRICT }}</span>
                </div>
                <div style="width: 16%; display: flex; align-content: center; align-items: center; justify-content: center">
                  <span>{{ c.DEVICE_TYPE }}</span>
                </div>
                <div style="width: 16%; display: flex; align-content: center; align-items: center; justify-content: center">
                  <span>{{ c.NUM }}</span>
                </div>
                <div style="width: 16%; display: flex; align-content: center; align-items: center; justify-content: center">
                  <span>{{ c.UNIT }}</span>
                </div>
                <div style="width: 16%; display: flex; align-content: center; align-items: center; justify-content: center">
                  <span>{{ c.SPECS }}</span>
                </div>
				<div style="width: 16%; display: flex; align-content: center; align-items: center; justify-content: center">
				  <span>{{ c.NOTE }}</span>
				</div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import dw_dzwz from './dwDzwzPopperStyles.js'
export default {
  name: "dwDzwzPopper",
  props: ['type', 'popper-data'],
  data () {
    return {
      content: {},
	  details:{},
      ...dw_dzwz,
      descDic: [
        {
          key: 'DISTRICT',
          text: '区域'
        },
        {
          key: 'DEVICE_TYPE',
          text: '设备类型'
        },
        {
          key: 'LOCATION',
          text: '存放位置'
        },
        {
          key: 'NOTE',
          text: '备注'
        },
        {
          key: 'NUM',
          text: '数量'
        },
        {
          key: 'SPECS',
          text: '规格'
        },
        {
          text: '计量单位',
          key: 'UNIT'
        }
      ]
    }
  },
  methods: {
    initData () {
      let popperStr = this.popperData.replace( /'/g, '"' )
      // console.log( '获取道岔信息', popperStr )
      let popper = JSON.parse( popperStr )
      this.content = popper
	  this.details=this.content.DETAILS
	  // console.log(this.details)
    }
  },
  mounted () {
    if (this.popperData === '' || this.popperData === undefined) {
      return
    } else {
      this.initData()
      // this.logo = require(__dirname, '/dwsbPopperLogos/天窗-大.png')
    }
  }
}
</script>

<style scoped>

</style>
