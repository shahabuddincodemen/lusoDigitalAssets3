<template>
    <div class="content">
        <div>
            <p>Title: {{ title }} </p>
        </div>
        <div>
            <slot name="slot-one">
                default slot 1
            </slot>
            <slot name="slot-two">
                default slot 2
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{ 
        title: {
            type: String,
            required: true
        },
    },
}
</script>
<style scoped>
    .content{
        padding: 50px;
        border: 1px solid red;
        max-width: 300px;
        margin: 10px;
    }
</style>
