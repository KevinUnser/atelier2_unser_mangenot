<template>
  <div>
    <div id="div_form">
      <form action="" class="p-3 mt-3">
        <div class="mb-3">
          <label class="form-label" for="input_titre">Titre</label>
          <input
            class="form-control"
            type="text"
            id="input_Titre"
            placeholder="Titre de l'évenement"
          />
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="input_lieu">lieu</label>
          <input
            class="form-control"
            type="text"
            id="input_lieu"
            placeholder="lieu de l'évenement"
          />
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="input_date">date</label>
          <input class="form-control" type="date" id="input_date" />
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="input_heure">heure</label>
          <input class="form-control" type="time" id="input_heure" />
          <div class="form-text"></div>
        </div>

        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-success">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
</style>