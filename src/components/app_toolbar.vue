<template>
    <div>
         <van-nav-bar :title="title" />
    </div>
</template>

<script>
export default {

    props: {
        title: ""
    }
}
</script>

<style>
.van-nav-bar__title{
    font-size: 20px;
    font-weight: bold;
}
</style>
