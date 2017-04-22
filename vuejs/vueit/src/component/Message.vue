<template>
    <div class="box">
    <h1>{{ name }} </h1>
    <p><slot></slot></p>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style>
    .box{
        background: #ccc;
        padding: 30px;
    }
</style>