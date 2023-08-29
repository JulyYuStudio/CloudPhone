<template>
    <div>
        <van-tag class="base-tag-child">{{$t('base64.img_base64')}}</van-tag>
        <div class="base-menu-child">
            <van-cell-group>
                <div class="base-image">
                    <van-image height="300px" fit="contain" :src="fieldValue" />
                </div>

                <div class="base-menu-child">
                    <van-field type="textarea" @input="getFieldValue"
                        :placeholder="$t('base64.input_placeholder')" />
                </div>
            </van-cell-group>
        </div>
        <van-tag class="base-tag-child">{{$t('base64.base64_img')}}</van-tag>
        <div class="base-menu-child">
            <van-cell-group>
                <van-uploader accept="image/*" :max-count="1" v-model="fileList" :after-read="afterRead" />
                <div v-show='(this.imageBase64 != null && this.imageBase64 != "")'>
                    <div class="base-menu-child">
                        <van-cell :value="imageBase64" />
                        <van-button type="primary" @click="copy">{{$t('base64.copy')}}</van-button>
                    </div>
                </div>



            </van-cell-group>
        </div>
    </div>
</template>

<script>
export default {
    layout: "app_layout",
    data() {
        return {
            fieldValue: "",
            imageBase64: "",
            fileList: []
        };
    },
    methods: {
        isImageBase64(){
            return this.imageBase64 != null && this.imageBase64 != "";
        },
        getFieldValue(e) {
            console.log(e);
            this.fieldValue = e;
        },
        afterRead(files, detail) {
            this.imageBase64 = files.content;
        },
        async copy() {
            try {
                await this.$copyText(this.imageBase64);
            } catch (e) {
                console.error(e);
            }
        }
    }
}
</script>

<style> .base-tag-child {
     margin-top: 15px;
     margin-left: 15px;
     font-size: 20px;
 }

 .base-image {
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