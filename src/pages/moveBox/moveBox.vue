<template>
    <view class="box">
        哈哈哈哈哈
        <view ref="move"  class="box-move" @click="move"></view>
    </view>
</template>

<script>
const animation = uni.requireNativePlugin('animation')
export default {
    methods: {
        move() {
            var moveBox = this.$refs.move
            animation.transition(moveBox, {
                styles: {
                    backgroundColor: "#007AFF",
                    transform: 'translate(100px, 80px)',
                    transformOrigin: 'center center',
                },
                duration: 800,
                timingFunction: 'ease',
                delay: 0
            }, () => {
                uni.showToast({
                    title: 'finish',
                    icon: 'none'
                });
            })
        }
    }
}
</script>

<style scoped>
.box {
    width: 750rpx;
    height: 750rpx;
}

.box-item {
    width: 250rpx;
    height: 250rpx;
    background-color: #00aaff;
}
</style>