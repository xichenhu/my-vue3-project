<template>
  <view class="content">
    <img class="content-logo" src="https://app-assets.monix.co.th/app/login_bg.png" />
    <view class="content-text-area">
      <text class="content-title">{{ title }}</text>
    </view>
    <view class="content-button">
      <button @click="buttonClick">{{ buttonText }}</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('welcome to Finnix')
const buttonText = ref('click')

const buttonClick = () => {
  uni.navigateTo({
    url: '/pages/user/user'
  });
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-logo {
    height: 100%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  &-text-area {
    display: flex;
    justify-content: center;
  }

  &-title {
    font-size: 36rpx;
    color: #8f8f94;
  }

  &-button {
    width: 80%;
    height: 100rpx;
    uni-button {
      width: 100%;
      margin: 30px auto;
      text-align: center;
      height: 100rpx;
      line-height: 100rpx;
      font-size: 32rpx;
      border: 1px solid #0040b2;
      background: #0040b2;
      color: #ffffff;
      border-radius: 10rpx;
    }
  }
}

uni-button:after {
  display: none;
}
</style>
