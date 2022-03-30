<template>
  <div>
    <div id="div_form">
      <form action="" class="p-3 mt-3">
        <div class="mb-3">
          <label class="form-label" for="input_email">e-mail</label>
          <input
            class="form-control"
            type="email"
            id="input_email"
            placeholder="your email"
          />
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="input_pass">password</label>
          <input
            class="form-control"
            type="text"
            id="input_pass"
            placeholder="password"
          />
          <div class="form-text"></div>
        </div>

        <div class="d-flex justify-content-center">
          <p class="m-2 me-5">you haven't an account ? go on<RouterLink id="SignUp_SIview" class="routerlink" to="/signup">Sign Up</RouterLink></p>
          <button type="submit" class="btn btn-success">sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>

#SignUp_SIview{
    color: blue;
    text-decoration: underline;
}

#SignUp_SIview:hover{
    cursor: pointer;
}

</style>