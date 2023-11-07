<template>
  <div class="compass hover:scale-105 transition shadow-lg hover:shadow-2xl">
    <div class="compass-inner">
      <div class="north">
		<NuxtLink to="/compass/n">N</NuxtLink>
	  </div>
      <div class="east">
		<NuxtLink to="/compass/e">E</NuxtLink>
	  </div>
      <div class="west">
		<NuxtLink to="/compass/w">W</NuxtLink>
	  </div>
      <div class="south">
		<NuxtLink to="/compass/s">S</NuxtLink>
	  </div>
      <div class="main-arrow">
        <div class="arrow-up"></div>
        <div class="arrow-down"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
</script>

<style lang="scss" scoped>
@charset "utf-8";
/* CSS Document */

/* Simple reset*/
* {
	margin: 0; padding: 0;
}

body {
	background: #81C4D1;
}

.compass {
	width: 80%;
	height: 80%;
	background-color: #F3F3F3;
	border-radius: 100%;
	background-image: -webkit-linear-gradient(top, #F7F7F7, #ECECEC);
  position: relative;
  margin: 0 auto;
}

.compass-inner {
	width: 90%;
	height: 90%;
	background-color: #3D3D3D;
	border-radius: 100%;
	position: relative;
	left: 5%;
	top: 5%;
	border: 3px solid #C5C5C5;
}

.main-arrow {
	height: 80%;
	width: 30px;
	position: relative;
	// center
	left: 50%;
	margin-left: -20px;
	top: 15%;

	transform-origin: center;
	box-sizing:border-box;
  	transform: rotate(20deg);
	// animation: spin 4.0s alternate infinite;
	// -ms-transform: rotate(20deg);
	// -o-transform: rotate(20deg);
	// -o-animation: spin 4.0s alternate infinite;
	// -moz-transform: rotate(20deg);
	// -moz-animation: spin 4.0s alternate infinite;
	// -webkit-transform: rotate(20deg);
	// -webkit-animation: spin 4.0s alternate infinite;
	
}

.arrow-up {
	width: 0; 
	height: 0;
	border-left: 15px solid transparent;
	border-right: 15px solid transparent;
	border-bottom: 105px solid #EF5052;
	position: relative;
}

.arrow-down {
	-webkit-transform: rotate(180deg); /* Safari and Chrome */
	width: 0; 
	transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	height: 0;
	border-left: 15px solid transparent;
	border-right: 15px solid transparent;
	border-bottom: 105px solid #F3F3F3;
	position: relative;
}

.north {
	font-size: 24px;
	font-family: 'Lobster Two', cursive;
	color: #FFF;
	position: absolute;
	left: 120px;
	top: 10px;
}

.east {
	font-size: 24px;
	font-family: 'Lobster Two', cursive;
	color: #FFF;
	position: absolute;
	left: 240px;
	top: 120px;
}

.west {
	font-size: 24px;
	font-family: 'Lobster Two', cursive;
	color: #FFF;
	position: absolute;
	left: 20px;
	top: 120px;
}

.south {
	font-size: 24px;
	font-family: 'Lobster Two', cursive;
	color: #FFF;
	position: absolute;
	left: 120px;
	top: 220px;
}

@keyframes spin {
    0%{
        transform:scale(1) rotate(0deg);
    }
	50% {
		transform:scale(1) rotate(80deg);
	}
	100% {
		transform:scale(1) rotate(-180deg);
	}
}

@-o-keyframes spin {
    0%{
        -webkit-transform:scale(1) rotate(0deg);
    }
	50% {
		-webkit-transform:scale(1) rotate(80deg);
	}
	100% {
		-webkit-transform:scale(1) rotate(-180deg);
	}
}

@-moz-keyframes spin {
    0%{
        -webkit-transform:scale(1) rotate(0deg);
    }
	50% {
		-webkit-transform:scale(1) rotate(80deg);
	}
	100% {
		-webkit-transform:scale(1) rotate(-180deg);
	}
}

@-webkit-keyframes spin {
    0%{
        -webkit-transform:scale(1) rotate(0deg);
    }
	50% {
		-webkit-transform:scale(1) rotate(80deg);
	}
	100% {
		-webkit-transform:scale(1) rotate(-180deg);
	}
}

@media (max-width: 600px) {
  .compass {
    width: 200px;
	height: 200px;
	text-align: center;
  }
  
  .compass-inner {
	  width: 170px;
	  height: 170px;
	  left: 13px;
	  top: 13px;
  }
  
  .main-arrow {
	width: 30px;
	left: 78px;
	width: 15px;
	padding-top: 3px;
  }
  
  .arrow-up {
	border-bottom: 82.5px solid #EF5052;
	border-left: 7.5px solid transparent;
	border-right: 7.5px solid transparent;
  }
  
   .arrow-down {
	border-bottom: 82.5px solid #F3F3F3;
	border-left: 7.5px solid transparent;
	border-right: 7.5px solid transparent;
  }
  
  .north {
	  left: 78px;
	  top: 10px;
	  font-size: 16px;
  }
  
  .south {
	  font-size: 16px;
	  left: 78px;
	  top: 140px;
  }
  
  .east {
	  font-size: 16px;
	  top: 72.5px;
	  left: 145px;
  }
  
  .west {
	  font-size: 16px;
	  left: 10px;
	  top: 72.5px;
  }
}


@media (max-width: 600px) {
  .compass {
    width: 200px;
	height: 200px;
	text-align: center;
  }
  
  .compass-inner {
	  width: 170px;
	  height: 170px;
	  left: 13px;
	  top: 13px;
  }
  
  .main-arrow {
	width: 30px;
	left: 78px;
	width: 15px;
	padding-top: 3px;
  }
  
  .arrow-up {
	border-bottom: 82.5px solid #EF5052;
	border-left: 7.5px solid transparent;
	border-right: 7.5px solid transparent;
  }
  
   .arrow-down {
	border-bottom: 82.5px solid #F3F3F3;
	border-left: 7.5px solid transparent;
	border-right: 7.5px solid transparent;
  }
  
  .north {
	  left: 78px;
	  top: 10px;
	  font-size: 16px;
  }
  
  .south {
	  font-size: 16px;
	  left: 78px;
	  top: 140px;
  }
  
  .east {
	  font-size: 16px;
	  top: 72.5px;
	  left: 145px;
  }
  
  .west {
	  font-size: 16px;
	  left: 10px;
	  top: 72.5px;
  }
}

@media (max-width: 600px) {
  .compass {
    width: 200px;
	height: 200px;
	text-align: center;
  }
  
  .compass-inner {
	  width: 170px;
	  height: 170px;
	  left: 13px;
	  top: 13px;
  }
  
  .main-arrow {
	width: 30px;
	left: 78px;
	width: 15px;
	padding-top: 3px;
  }
  
  .arrow-up {
	border-bottom: 82.5px solid #EF5052;
	border-left: 7.5px solid transparent;
	border-right: 7.5px solid transparent;
  }
  
   .arrow-down {
	border-bottom: 82.5px solid #F3F3F3;
	border-left: 7.5px solid transparent;
	border-right: 7.5px solid transparent;
  }
  
  .north {
	  left: 78px;
	  top: 10px;
	  font-size: 16px;
  }
  
  .south {
	  font-size: 16px;
	  left: 78px;
	  top: 140px;
  }
  
  .east {
	  font-size: 16px;
	  top: 72.5px;
	  left: 145px;
  }
  
  .west {
	  font-size: 16px;
	  left: 10px;
	  top: 72.5px;
  }
}

@media (max-width: 600px) {
  .compass {
    width: 200px;
	height: 200px;
	text-align: center;
  }
  
  .compass-inner {
	  width: 170px;
	  height: 170px;
	  left: 13px;
	  top: 13px;
  }
  
  .main-arrow {
	width: 30px;
	left: 78px;
	width: 15px;
	padding-top: 3px;
  }
  
  .arrow-up {
	border-bottom: 82.5px solid #EF5052;
	border-left: 7.5px solid transparent;
	border-right: 7.5px solid transparent;
  }
  
   .arrow-down {
	border-bottom: 82.5px solid #F3F3F3;
	border-left: 7.5px solid transparent;
	border-right: 7.5px solid transparent;
  }
  
  .north {
	  left: 78px;
	  top: 10px;
	  font-size: 16px;
  }
  
  .south {
	  font-size: 16px;
	  left: 78px;
	  top: 140px;
  }
  
  .east {
	  font-size: 16px;
	  top: 72.5px;
	  left: 145px;
  }
  
  .west {
	  font-size: 16px;
	  left: 10px;
	  top: 72.5px;
  }
}
</style>
