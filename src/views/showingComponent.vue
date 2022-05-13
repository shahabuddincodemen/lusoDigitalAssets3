<template>
    <div>
        <component-one title="Card ttitle">
            <template v-slot:slot-one>
                <p>Slot 1</p>
            </template>
            <template v-slot:slot-two>
                <p>Slot 2</p>
            </template>
        </component-one>
    </div>
</template>

<script>
import ComponentOne from '../components/componentOne.vue'
export default {
    components:{ComponentOne},
    data(){
        return{
            
        }
    },
}
</script>

   