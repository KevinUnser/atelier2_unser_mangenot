<script>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import EventsView from "./views/EventsView.vue";
import EventView from "./views/EventView.vue";
import SignUpView from "./views/SignUpView.vue";
import SignInView from "./views/SignInView.vue";
import EventD from "./components/EventDetails.vue";
import EventR from "./components/EventResume.vue";

import globale from "./globale";
import axios from "axios";

export default {
  name: "reunionou",
  views: { HomeView, EventsView, EventView, SignUpView, SignInView },
  components: { EventD, EventR },
  data() {
    return {
      current: 3,
    };
  },
  methods: {
    getEvents() {
      const path = "./Events.json";
      // Make a request for a user with a given ID
      axios
        .get(path)
        .then(function (response) {
          // handle success
          globale.state.events = response.data.Evenements; 

          let div_shareEvents = document.getElementById("div_shareEvents");
          let i = 0;
          globale.state.events.forEach(event => {
            let rtlk = document.createElement(RouterLink)
            rtlk.className = "rtlk_evenR";
            rtlk.to = "/event";
            
            let eventR = document.createElement(EventR);
            eventR.addEventListener("click", () => {
                    globale.state.currentEventId = id;
            });

            rtlk.appendChild(eventR);
            div_shareEvents.appendChild(rtlk);
            i++;
            console.log(rtlk);
          });
          //console.log(div_shareEvents);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  },
};
</script>

<template>
  <div>
    <header class="p-3 bg-dark text-white">
      <div
        id="div_header"
        class="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center justify-content-lg-start
        "
      >
        <nav
          id="nav_header"
          class="
            d-flex
            flex-wrap
            align-items-center
            justify-content-center justify-content-lg-start
          "
        >
          <ul
            class="
              nav
              col-12 col-lg-auto
              me-lg-auto
              mb-2
              justify-content-center
              mb-md-0
            "
          >
            <li><RouterLink class="routerlink" to="/">Home</RouterLink></li>
            <li @click="getEvents()">
              <RouterLink class="routerlink" to="/events">Events</RouterLink>
            </li>
            <li>
              <RouterLink class="routerlink" to="/createEvent"
                >Créer un event</RouterLink
              >
            </li>
          </ul>

          <div id="div_account" class="text-end">
            <RouterLink class="routerlink" to="/signup">Sign Up</RouterLink>
            <RouterLink class="routerlink" to="/signin">Sign In</RouterLink>
          </div>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
.routerlink {
  margin: 1em;
  color: aliceblue;
  text-decoration: none;
}

#nav_header {
  width: 100%;
}
</style>
