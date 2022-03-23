<script>

import axios from "axios";
export default {
  name: "Events",
 
  data() {
    return {
      events: []
    }
  },
 mounted() {
    axios
      .get('http://localhost:3001/evenements')
      .then(response => {
      console.log(response.data);
      this.events = response.data;
      });
  }
}
</script>

<template>
  <div class="Events">
    <h1 class="title">Evenements</h1>

    <h3>
      Liste des évenements :
    </h3>
    <ul>
        <li v-for="event in events" 
                    :key="event" class="events">
                    {{event.Intitule}}
        </li>
    </ul>
  </div>
</template>


