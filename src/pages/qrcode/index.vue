<template>
    <div>
        <div class="base-menu">
            <van-cell-group>

                    <div id="qrcodeSize" class="base-menu-child-cell">
                        <canvas id="qrcode" style="padding-top: 5px;"></canvas>
                    </div>






                <div style="text-align: center;">
                    <div class="base-menu-child">
                        <van-cell-group>
                            <van-field type="textarea" v-model="qrData" @input="getFieldValue"
                                :placeholder="$t('qrcode.input_placeholder')" />
                        </van-cell-group>
                    </div>
                    <van-button plain class="base-button" type="primary" @click="sureClick">{{ $t('qrcode.create_qr')
                    }}</van-button>
                </div>


            </van-cell-group>
            <div v-show='(this.qrDataList != null && this.qrDataList.length > 0)'>
                <van-tag type="primary" class="base-tag-child">{{ $t('qrcode.history') }}</van-tag>
                <div class="base-menu-child" style="margin: 10px;">
                    <van-list>
                        <van-cell  @click="getQrCode(qrData)" v-for="(qrData, index) in qrDataList" :key="index">{{ index + 1 }}.{{ qrData }}</van-cell>
                    </van-list>
                </div>
            </div>

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
            qrDataList: [],
        };
    },
    methods: {
        getQrCode(data){
            this.createCode(data,false);
        },
        createCode(data,isAdd){
            if (data == NaN || data == "") return;
            this.canvasSize = document.getElementById("qrcodeSize");
            // 获取canvas元素
            this.canvas = document.getElementById("qrcode");
            // 获取uQRCode实例
            var qr = new UQRCode();
            // 设置二维码内容
            qr.data = data;
            qr.margin = 0;
            // 设置二维码大小，必须与canvas设置的宽高一致
            // console.log("----> " + this.canvasSize.width);
            // console.log("----> " + this.canvasSize.clientWidth);
            // for(let v of this.canvasSize.style){
            //     console.log("--- " + v);
            // }
            this.canvasSize.style.paddingTop = 0;
            this.canvasSize.style.height =  this.canvasSize.clientWidth + "px";

            this.canvas.height = this.canvasSize.clientWidth;
            this.canvas.width = this.canvasSize.clientWidth;
            qr.size = this.canvasSize.clientWidth - 10;
            // 调用制作二维码方法
            qr.make();

            // 获取canvas上下文
            var canvasContext = this.canvas.getContext("2d");
            // 设置uQRCode实例的canvas上下文
            qr.canvasContext = canvasContext;
            // 调用绘制方法将二维码图案绘制到canvas上
            qr.drawCanvas();
            if(isAdd)
            this.qrDataList.push(data);
        },
        sureClick() {
            this.createCode(this.qrData,true);
        },
        // isImageBase64() {
        //     return this.imageBase64 != null && this.imageBase64 != "";
        // },
        getFieldValue(e) {
            this.qrData = e;
        },

    }
}
</script>

<style> .base-tag-child {
     margin-top: 15px;
     margin-left: 15px;
     font-size: 20px;
 }

 .base-menu {
     border: 2px solid grey;
     padding: 2px;
     border-radius: 5px;
     margin-left: 15px;
     margin-right: 15px;
     margin-top: 20px;

 }

 .base-menu-child {
     border: 2px solid grey;
     padding: 2px;
     border-radius: 5px;
     margin-left: 15px;
     margin-right: 15px;
     margin-top: 20px;
     text-align: center;
 }

 .base-menu-child-cell {
     border: 2px solid grey;
     padding: 2px;
     border-radius: 5px;
     margin-left: 20%;
     margin-right: 20%;
     margin-top: 20px;
     text-align: center;
     width: 60%;
     height: 0;
     padding-top: 60%;
 }



 .base-button {
     margin: 10px;
 }

 .textarea {
     max-height: 600px !important;
 }
</style>