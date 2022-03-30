<script>
import EventR from "@/components/EventResume.vue";
import App from "@/App.vue";
import globale from "../globale";
import axios from "axios";

export default {
  setup() {
    const { state } = globale;
    return { state };
  },

  components: { EventR },
  methods: {
    getId(id) {
      globale.state.currentEventId = id;
      //console.log(globale.state.currentEventId);
    },
  },
};
</script>

<template>
  <div class="mt-3">
    <div id="div_myEvents">
      <h3>Mes évenements</h3>
      <RouterLink class="rtlk_eventR" to="/event"
        ><EventR @click="getId(1)"
      /></RouterLink>
      <RouterLink class="rtlk_eventR" to="/event"
        ><EventR @click="getId(2)"
      /></RouterLink>
    </div>

    <div id="div_shareEvents">
      <h3>Evenements partager avec moi</h3>
      <RouterLink class="rtlk_eventR" to="/event"
        ><EventR @click="getId(3)"
      /></RouterLink>
      <RouterLink class="rtlk_eventR" to="/event"
        ><EventR @click="getId(4)"
      /></RouterLink>
      <RouterLink class="rtlk_eventR" to="/event"
        ><EventR @click="getId(5)"
      /></RouterLink>
    </div>
    <div id="div_pubEvents">
      <h3>Evenements public</h3>
      <RouterLink class="rtlk_eventR" to="/event"
        ><EventR @click="getId(6)"
      /></RouterLink>
      <RouterLink class="rtlk_eventR" to="/event"
        ><EventR @click="getId(7)"
      /></RouterLink>
    </div>
  </div>
</template>

<style>
#div_myEvents,
#div_shareEvents,
#div_pubEvents {
  margin-inline: 10%;
}

.rtlk_eventR {
  text-decoration: none;
  color: black;
}
</style>