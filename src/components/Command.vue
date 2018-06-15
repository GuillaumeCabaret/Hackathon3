<template>
<div>
<div>
<h1>Commander</h1>
<img src="../assets/logowhite.png" class="logo">
<a href="#/menu" class="close"></a>
</div>
<div style="margin-top: 7vh;">
<div class="calendar">
  <hgroup>
    <h1 class="month">June</h1>
  </hgroup>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    <li>31</li>
  </ul>
</div>
</div>
  <div>
    <p>Heure: <select>
  <option value="volvo">12h</option>
  <option value="saab">12h15</option>
  <option value="mercedes">12h30</option>
  <option value="audi">12h45</option>
</select></p>
   <p>Lieu: <select>
  <option value="volvo">Chartres</option>
  <option value="saab">La Loupe</option>
  <option value="mercedes">Nantes</option>
  <option value="audi">Le Mans</option>
</select></p>
<p>Véhicule: <select>
  <option value="volvo">Audi</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select></p><p>Combien de mn disposez vous ? <select>
  <option value="volvo">5mn</option>
  <option value="saab">10mn</option>
  <option value="mercedes">20mn</option>
  <option value="audi">30mn</option>
</select></p>
<p>Délai d'attente estimé : {{ calcul }} mn </p>
<p>Prix estimé : {{ prix }} € </p>
  </div>
  <div class="hot-container">
	<p>
		<a href="#/menu" class="btn">Commander</a>
	</p>
</div>
</div>
</template>

<script>
export default {
  name: "Command",
  data() {
    return {
      msg: "Command",
      calcul: "5",
      prix: "3.18"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  float: left;
  width: 30%;
  margin-top: -13vh;
}
.close {
  position: absolute;
  right: 22px;
  top: 20px;
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
/* Calendar */
body {
  padding: 0;
  max-width: 800px;
  min-width: 800px;
  margin: 2px auto;
}
.calendar {
  position: relative;
  display: block;
  margin: auto;
  background-color: rgba(44, 44, 44, 0.777);
  border-radius: 8%;
  width: 350px;
  height: 330px;
}
hgroup {
  position: relative;
  display: block;
  margin: auto;
}
.month {
  text-shadow: 1.2px 1.2px 0.6px #fff;
  text-align: right;
  font-family: "Open Sans", sans-serif;
  right: 20px;
  top: 0px;
  color: white;
  position: relative;
}

ul {
  position: relative;
  list-style-type: none;
  top: -15px;
  left: -15px;
  margin: auto;
}
ul li {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: rgba(44, 44, 44, 0.422);
  margin-right: 2px;
  margin-top: 2px;
  text-align: center;
  color: white;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  border-radius: 50%;
  line-height: 5vh;
}
ul li:hover {
  color: tomato;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.notificacion:not(:hover) {
  position: relative;
  display: block;
  width: 100%;
  height: 40px;
  font-family: "Open Sans", sans-serif;
  color: white;
  background-color: rgba(44, 44, 44, 0.322);
}
.notificacion {
  position: relative;
  display: block;
  width: 100%;
  height: 40px;
  font-family: "Open Sans", sans-serif;
  color: white;
  background-color: #000;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.notificacion h3 {
  left: 30px;
  position: relative;
  font-weight: 100;
}
.notificacion b {
  color: white;
  position: relative;
  top: 0px;
  left: 60px;
  top: 0px;
  text-align: left;
  font-size: 0.8em;
}
.notificacion a {
  position: relative;
  color: #fff;
  float: right;
  top: -40px;
  right: 7px;
}
.notificacion .fa-coffee {
  position: absolute;
  top: 7px;
  left: 130px;
}
.hot-container p {
  margin-top: -60px;
}
a {
  text-decoration: none;
  margin: 0 10px;
}

.hot-container {
  min-height: 100px;
  margin-top: 100px;
  width: 100%;
  text-align: center;
}

a.btn {
  background: #ffffff;
  border: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  border-radius: 18px 18px 18px 18px;
  box-shadow: 0 1px 0 #e6f5ff inset;
  color: #8f8be6;
  cursor: pointer;
  display: block;
  padding: 10px 25px;
  width: 180px;
  margin-left: 15%;
}
</style>
