<template>
  <div>
    <div id="div_form">
      <form action="" class="p-3 mt-3">
        <div class="mb-3">
          <label class="form-label" for="input_lastname">lastname</label>
          <input
            class="form-control"
            type="text"
            id="input_lastname"
            placeholder="your lastname"
          />
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="input_firstname">firstname *</label>
          <input
            class="form-control"
            type="text"
            id="input_firstname"
            placeholder="your firstname"
          />
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="input_email">e-mail *</label>
          <input
            class="form-control"
            type="email"
            id="input_email"
            placeholder="your email"
          />
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="input_pass">password *</label>
          <input
            class="form-control"
            type="text"
            id="input_pass"
            placeholder="password"
          />
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="input_passconfirm"
            >confirme your password *</label
          >
          <input
            class="form-control"
            type="text"
            id="input_passconfirm"
            placeholder="same password"
          />
          <div class="form-text"></div>
        </div>
        <div class="d-flex justify-content-center">
          <p class="m-2 me-5">you already have an account ? go on<RouterLink id="SignIn_SUview" class="routerlink" to="/signin">Sign In</RouterLink></p>
          <button type="submit" class="btn btn-success">sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
#div_form {
  margin-inline: 20%;
}

#SignIn_SUview{
    color: blue;
    text-decoration: underline;
}

#SignIn_SUview:hover{
    cursor: pointer;
}


</style>