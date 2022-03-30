import { reactive } from "vue";

const state = reactive({
    currentEventId: "0",
    events: [],
    user: "",
});

export default {state};