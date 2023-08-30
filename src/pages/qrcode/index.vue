<template>
    <div>
        <div class="base-menu-child">

            <van-row type="flex" >
                <van-col span="7">
                    <div class="base-center">
                        <div class="base-menu-child">
                            <van-cell-group >
                                <van-field type="textarea" v-model="qrData" @input="getFieldValue"
                                    :placeholder="$t('base64.input_placeholder')" />

                            </van-cell-group>

                        </div>
                        <van-button type="primary" @click="sureClick">{{ $t('base64.copy') }}</van-button>

                    </div>
                </van-col>
                <van-col span="3">
                    <div class="base-center">
                        <canvas id="qrcode" width="400" height="400"></canvas>
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
import UQRCode from 'uqrcodejs';
export default {
    layout: "app_layout",
    data() {
        return {
            qrData: "",//数据
        };
    },
    methods: {
        sureClick() {
            // 获取uQRCode实例
            var qr = new UQRCode();
            // 设置二维码内容
            qr.data = this.qrData;
            // 设置二维码大小，必须与canvas设置的宽高一致
            qr.size = 200;
            qr.margin = 10;
            // 调用制作二维码方法
            qr.make();
            // 获取canvas元素
            this.canvas = document.getElementById("qrcode");
            // 获取canvas上下文
            var canvasContext = this.canvas.getContext("2d");
            // 设置uQRCode实例的canvas上下文
            qr.canvasContext = canvasContext;
            // 调用绘制方法将二维码图案绘制到canvas上
            qr.drawCanvas();
        },
        // isImageBase64() {
        //     return this.imageBase64 != null && this.imageBase64 != "";
        // },
        getFieldValue(e) {
            this.qrData = e;
        },
        // afterRead(files, detail) {
        //     this.imageBase64 = files.content;
        // },
        // async copy() {
        //     try {
        //         await this.$copyText(this.imageBase64);
        //     } catch (e) {
        //         console.error(e);
        //     }
        // }
    }
}
</script>

<style> .base-tag-child {
     margin-top: 15px;
     margin-left: 15px;
     font-size: 20px;
 }

 .base-center {
     padding: 10px;
     margin: 0 auto;
     text-align: center;
 }

 .base-menu-child {
     border: 2px solid grey;
     padding: 2px;
     border-radius: 5px;
     margin-left: 15px;
     margin-right: 15px;
     margin-top: 20px;
 }

 .textarea {
     max-height: 400px !important;
 }
</style>