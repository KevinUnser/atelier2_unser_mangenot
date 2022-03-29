<script>
import EventD from "@/components/EventDetails.vue";
import App from "@/App.vue";
import globale from "../globale";

export default {
    setup(){
        const {state} = globale;

        return {state}
    },
    data() {
        return{
            id_data: globale.state.currentEventId
        }
    },
    components: {EventD},
    methods: {
        log(text){
            console.log(globale.state.currentEventId);
        }
    }
}
</script>

<template>
    <div>
        <EventD :id="id_data" />
    </div>
</template>