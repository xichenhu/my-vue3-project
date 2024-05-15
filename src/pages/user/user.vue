<template>
  <view class="my-content">
    <view>用户名：{{ userName }}</view>
    <view>年龄：{{ age }}</view>
    <view v-for="(item, index) in doneCount">
      <view>编号：{{ item.id }}</view>
      <view>内容：{{ item.text }}</view>
      <view>状态：{{ item.done }}</view>
      <view>计数：{{ count }}</view>
    </view>
  </view>
  <view>
    <button @click="addAge">{{ buttonText }}</button>
    <button @click="addCountAction">{{ actionButtonText }}</button>
  </view>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {
      buttonText: '长大了',
      actionButtonText: '计数'
    }
  },
  computed: {
    ...mapState({
      userName: state => state.userName,
      age: state => state.age,
      count: state => state.count
    }),
    ...mapGetters({
      doneCount: 'donetodos'
    }),
  },
  methods: {
    ...mapMutations(['addAge']),
    ...mapActions([
    'addCountAction'
    ])
  }
}
</script>

<style lang="less" scoped>
.my-content {
  width: 92%;
  margin: 20rpx auto 0;
}
uni-button {
  width: 92%;
  margin: 30px auto;
  text-align: center;
  height: 100rpx;
  line-height: 100rpx;
  font-size: 32rpx;
  border: 1px solid #0040b2;
  background: #0040b2;
  color: #ffffff;
  border-radius: 10rpx;
  &:after {
    display: none;
  }
}
</style>