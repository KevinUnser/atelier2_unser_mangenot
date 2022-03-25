<script setup>
import { RouterLink, RouterView } from "vue-router";
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
            <li>
              <RouterLink class="routerlink" to="/events">Events</RouterLink>
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

#div_account {
  margin-left: 60%;
}

#nav_header {
  width: 100%;
}
</style>
