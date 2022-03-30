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
          <button class="btn btn-primary btn_event">ça m'intéresse</button>
          <button class="btn btn-success btn_event">je viens</button>
          <button class="btn btn-danger btn_event">je ne peux pas</button>
        </div>
      </div>
    </div>

    <div id="div_participants">
      <h3 id="h3_pre">Participant</h3>

      <div id="div_pre">
        <li><strong>Roger</strong> - je serais là à partir de 14h30</li>
        <li><strong>Béa</strong></li>
      </div>

      <h3 id="h3_int">intéressé</h3>

      <div id="div_int">
        <li><strong>Anes</strong> - je sais pas encore quand je pars en vacances</li>
        <li><strong>Jules</strong> - je ne saurais qu'au dernier moment si je suis dispo</li>
      </div>

      <h3 id="h3_abs">Absent</h3>

      <div id="div_abs">
        <li><strong>Mathilde</strong> - j'ai le covid</li>
      </div>

      <h3 id="h3_att">En attentes</h3>

      <div id="div_att">
        <li><strong>Xavier</strong></li>
        <li><strong>Daniel</strong></li>
      </div>
    </div>

    <div id="div_comment">
      <h2>Commentaires</h2>
      <div class="div_one_com">
        <p class="p_nom">Roger</p>
        <p class="p_com">super soiré, on remet ça quand vous voulez</p>
      </div>
      <div class="div_one_com">
        <p class="p_nom">Xavier</p>
        <p class="p_com">On prendra moins d'alcool la prochaine fois</p>
      </div>
      <div class="div_one_com">
        <p class="p_nom">Daniel</p>
        <p class="p_com">Désolé au final j'ai eu un imprévue.</p>
      </div>
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

#div_reponse {
  width: 100%;
  margin-top: 30%;
}

.btn_event {
  width: 60%;
  margin: 0.2em;
}

#div_participants {
  margin: 5em 5% 5em 5%;
  text-align: center;
}

#div_pre,
#h3_pre {
  color: darkgreen;
}

#div_int,
#h3_int {
  color: darkblue;
  margin-top: 0.5em;
}

#div_abs,
#h3_abs {
  color: darkred;
  margin-top: 0.5em;
}

#div_att,
#h3_att {
  color: gray;
  margin-top: 0.5em;
}

li {
  list-style: none;
}

#div_comment{
  margin: 0% 5% 3em 5%;
}

.div_one_com{
  display: flex;
}

.p_nom{
  width: 20%;
  margin-right: 0.5em;
}

.p_com{
  width: 80%;
}
</style>

