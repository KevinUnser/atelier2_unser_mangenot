<script>
export default {
  props: ["id"],
};
</script>

<template>
  <div>
    <div id="div_event_infos">
      <div id="div_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2633.8185207376164!2d6.172256015526132!3d48.68983427927139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1648569605375!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div id="div_infos_reponse">
        <div id="div_infos">
          <h2 id="h2_titre">anniversaire {{ id }}</h2>
          <p id="p_lieu">2Tr boulvard charlemagne 54000 Nancy</p>
          <p id="p_date">64 mars 2099</p>
        </div>

        <div id="div_reponse">
          <button class="btn btn-primary">ça m'intéresse</button>
          <button class="btn btn-success">je viens</button>
          <button class="btn btn-danger">je ne peux pas</button>
        </div>
      </div>
    </div>

    <div id="div_participants">
      <ul>
        <li>Roger</li>
        <li>Béa</li>
        <li>Anes</li>
        <li>Jule</li>
      </ul>
    </div>
  </div>
</template>

<style>
#div_event_infos {
  width: 90%;
  display: flex;
  margin-inline: 5%;
  margin-top: 2em;
}

#div_map {
  width: 50%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}

#div_map iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

#div_infos_reponse {
  width: 45%;
  height: 100%;
  margin-inline: 2.5%;
  text-align: center;
}

#div_infos {
  width: 100%;
  height: 50%;
  margin-top: 10%;
}

#div_reponse{
    width: 100%;
    margin-top: 30%;
}

.btn{
    width: 60%;
    margin: 0.2em;
}
</style>

