<template>
<div>
  <div>
  <h1>Historique</h1>
  <img src="../assets/logowhite.png" class="logo">
  <a href="#/menu" class="close"></a>
  </div>
<div class="timeline-container">
  <ul class="timeline">
    <li class="timeline-item">

      <!-- primary-content -->
      <div class="primary-content">
          <i class="far fa-clock"></i>
        <div class="timeline-title"><i class="fas fa-car"></i>Voiture :</div>
        <div class="timeline-time">11:00 AM</div>
      </div>
      <!-- secondary-content -->
      <div class="secondary-content">
        <div class="timeline-time">10 mins</div>
      </div>
    </li>

    <li class="timeline-item">

      <!-- primary-content -->
      <div class="primary-content">
          <i class="far fa-clock"></i>
        <div class="timeline-title"><i class="fas fa-car"></i>Voiture :</div>
        <div class="timeline-time">11:00 AM</div>
      </div>
      <!-- secondary-content -->
      <div class="secondary-content">
        <div class="timeline-time">15 mins</div>
      </div>
    </li>

    <li class="timeline-item">

      <!-- primary-content -->
      <div class="primary-content">
          <i class="far fa-clock"></i>
        <div class="timeline-title"><i class="fas fa-car"></i>Voiture :</div>
        <div class="timeline-time">11:00 AM</div>
      </div>
      <!-- secondary-content -->
      <div class="secondary-content">
        <div class="timeline-time">10 mins</div>
      </div>
    </li>

    <li class="timeline-item">

      <!-- primary-content -->
      <div class="primary-content">
          <i class="far fa-clock"></i>
        <div class="timeline-title"><i class="fas fa-car"></i>Voiture :</div>
        <div class="timeline-time">11:00 AM</div>
      </div>
        <!-- secondary-content -->
      <div class="secondary-content">
        <div class="timeline-time">10 mins</div>
      </div>
    </li>
    <li class="timeline-item">

      <!-- primary-content -->
      <div class="primary-content">
          <i class="far fa-clock"></i>
        <div class="timeline-title"><i class="fas fa-car"></i>Voiture :</div>
        <div class="timeline-time">11:00 AM</div>
      </div>
      <!-- secondary-content -->
      <div class="secondary-content">
        <div class="timeline-time">10 mins</div>
      </div>
    </li>
  </ul>
</div>
<div>
  <div class="information message">
  <h2>6 %</h2>
	<p>C'est le pourcentage des accidents mortels dûs à un défaut de gonflage des pneumatiques</p>
</div>
</div>
</div>
</template>

<script>
export default {
  name: "Historique",
  data() {
    return {
      msg: "Historique",
      date: "13/06/2018"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-left: 30px;;
}
.logo {
  float: left;
  width: 30%;
  margin-top: -13vh;
}
.close {
  position: absolute;
  right: 20px;
  top: 28px;
  width: 32px;
  height: 32px;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: white;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.timeline-container {
  width: 84%;
  position: absolute;
  left: 50%;
  top: 48%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 0 30px;
}

.timeline-container .timeline {
  list-style: none;
  margin: 0;
  padding: 15px;
}

.timeline-container .timeline .timeline-item {
  padding-left: 30px;
  padding-bottom: 30px;
  position: relative;
}

.timeline-container .timeline .timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-container .timeline .timeline-item + .timeline-item {
  margin-top: -30px;
}

.timeline-container
  .timeline
  .timeline-item:last-child
  > .timeline-marker:after {
  display: none;
}

.timeline-container
  .timeline
  .timeline-item:last-child
  > .timeline-marker:before {
  top: 3px;
}

.timeline-container .timeline .timeline-marker {
  position: absolute;
  top: 15px;
  bottom: 0;
  left: 0;
  width: 14px;
}

.timeline-container .timeline .timeline-marker:before {
  background: rgba(255, 255, 255, 0.54);
  border-radius: 5px;
  content: "";
  display: block;
  height: 10px;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 10px;
  z-index: 1;
}

.timeline-container .timeline .timeline-marker:after {
  content: "";
  width: 14px;
  background: #01579b;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  border-radius: 25px;
}

.timeline-container
  .timeline
  .timeline-item:nth-child(2n)
  > .timeline-marker:after {
  background: #03a9f4;
}

/* css for primary-content / secondary-content */

.timeline-container .timeline .timeline-item .primary-content,
.timeline-container .timeline .timeline-item .secondary-content {
  position: relative;
  padding: 18px;
}

.timeline-container .timeline .timeline-item .primary-content:before {
  position: absolute;
  content: "";
  top: 0;
  left: -60px;
  right: -30px;
  height: 100%;
  background-color: #eeeeee;
  z-index: -1;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), 0 1px 5px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  transition: 0.2s ease;
}

.timeline-container .timeline .timeline-item:hover > .primary-content:before {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.26);
}

.timeline-container
  .timeline
  .timeline-item:nth-child(2n)
  > .primary-content:before {
  background-color: #2196f3;
}

.timeline-container
  .timeline
  .timeline-item:nth-child(2n)
  > .primary-content
  .timeline-title,
.timeline-container
  .timeline
  .timeline-item:nth-child(2n)
  > .primary-content
  .timeline-address,
.timeline-container
  .timeline
  .timeline-item:nth-child(2n)
  > .primary-content
  .timeline-time {
  color: #fff;
}

.timeline-container .timeline .timeline-item .primary-content .timeline-title {
  font-size: 13px;
  font-weight: 500;
  margin: 0 0 5px;
  color: rgba(0, 0, 0, 0.87);
}
.timeline-title {
  float: left;
}
.timeline-container .timeline .timeline-item .primary-content .timeline-address,
.timeline-container .timeline .timeline-item .primary-content .timeline-time {
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.54);
  margin: 0 0 10px;
}

.timeline-container .timeline .timeline-item .primary-content .timeline-time {
  color: rgba(0, 0, 0, 0.77);
  margin: 0;
}

.timeline-container .timeline .timeline-item .secondary-content .driving {
  font-size: 13px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.54);
}

.timeline-container .timeline .timeline-item .secondary-content .driving i {
  margin-right: 5px;
}

.timeline-container .timeline .timeline-item .secondary-content .timeline-time {
  position: absolute;
  right: 0;
  top: 15px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.54);
}
.fa-clock {
  float: left;
  margin-left: -5vh;
}

/* Message information */
h2 {
  font-weight: 100;
  font-size: 30pt;
  line-height: 1.3em;
  margin: 15px 0;
}

div.message {
  position: relative;
  padding: 10px;
  margin: 30px 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background: white;
  color: #8f8be6;
  margin-top: 65vh;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
div.message:hover {
  box-shadow: 0 15px 20px rgba(10, 0, 10, 0.3);
}

div.message:before {
  content: "";
  font-family: FontAwesome;
  position: absolute;
  display: block;
  top: -21px;
  left: 50%;
  margin: 0 -21px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  width: 24px;
  padding: 10px;
  background: inherit;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  color: rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  border: 2px solid transparent;
  z-index: 2;
}

div.message.information:before {
  content: "\f129";
  color: black;
}
</style>
