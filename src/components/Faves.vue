<template>
  <div class="">
    <nav class="header__nav">
      <ul class="header__navbar">
        <li class="header__item">
          <a href="#" class="header__link">
            <transition name="slide-fade">
              <button class="header--btn" v-if="show" key="on" @click="show = false">Close</button>
              <button class="header--btn" v-else key="off" @click="show = true">Faves</button>
            </transition>
          </a>
          <transition name="dropdown">
            <div class="header__dropdown-menu" v-bind:class="{ active: show }" v-if="show">
              <ul class="header__dropdown-menu-nav">
                <li class="header__dropdown-menu-item">
					<div class="">
						<div class="favoritesContent">
					    	<div class="results" id="results">
								<div class="items">
									<div class="item" v-for="(item) in faves" v-bind:id="item.id">
									<a v-bind:href="item.html_url">{{ item.name }}</a>
									<p>{{ item.language }}</p>
									<div class="itemButton"><button v-on:click="removeFave(item.id)">Remove</button></div>
									</div>
								</div>
					    	</div>
						</div>  
					</div>
                </li>
              </ul>
            </div>
          </transition>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
      props:["response", "faves"],
      data () {
      return {
      show: false,
      localFaves: this.faves
    }
  },
  methods: {
    removeFave(id){
      this.$emit('removed', id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav{

}


h3{
	padding: 0;
}

ul {
	 margin: 0;
	 padding: 0;
}
 h1 {
	 margin: 0;
}
 li {
	 list-style: none;
}
 a {
	 text-decoration: none;
}
 hr {
	 border: 0;
	 height: 0;
	 margin: 2rem 0;
	 border-top: 1px solid rgba(0, 0, 0, .1);
}
 .header {
	 padding: 2rem 5rem 2rem 5rem;
}
 .header__nav {
	 position: relative;
}

/* .header__navbar {
	 display: flex;
	 align-items: center;
	 flex-direction: row;
	 justify-content: flex-end;
}*/
 .header__item {
	 padding: 1rem;
	 position: relative;
}
 .header__link .header--icon {
	 color: gray;
}

 .header__link .header--btn {
	top: 0%;
    right: 10%;
	 position: absolute;
}
 .header__link .header--btn:focus {
	 outline: 0;
}



 button{
  cursor: pointer;
  border: none;
  color: white;
  font-weight: bold;
  background-color: #778CA3;
  border-radius: 5px;
  margin-left: 15px;
  transition: .3s;
  padding: 7.5px 17px;
}



.header--btn{
  cursor: pointer;
  font-size: 1.3rem;
}
 .header--icon {

	 width: 1.65rem;
	 height: 1.65rem;
	 display: inline-flex;
}

 .header__dropdown-menu {
    text-align: left;
 	height: 50vh;
	 position: absolute;
	 right: 0;
	 overflow-y: auto;
	 margin-top: 90px

}


/* .header__dropdown-menu-link {
	 display: flex;
	 align-items: center;
	 flex-direction: row;
	 justify-content: flex-start;
	 line-height: 0;
	 color: #3c4043;
	 padding: 0.6rem 1.5rem 0.6rem 1.5rem;
	 margin-bottom: 0.4rem;
	 border-radius: 0 50px 50px 0;
}*/
 .header__dropdown-menu-link:hover {
	 background-color: rgba(0, 0, 0, 0.039);
}
 .header__dropdown-menu-svg {
	 padding-right: 16px;
}
 .header__dropdown-menu-svg .header--icon {
	 width: 1.4rem;
	 height: 1.4rem;
}
 .slide-fade-enter-active, .slide-fade-leave-active {
	 transition: all 0.6s;
}
 .slide-fade-enter, .slide-fade-leave-active {
	 opacity: 0;
}
 .slide-fade-enter {
/*	 transform: translateX(-31px);*/
}
 .slide-fade-leave-active {
	/* transform: translateX(31px);*/
}
 .dropdown-enter-active, .dropdown-leave-active {
	 transition: all 1s;
}
 .dropdown-enter, .dropdown-leave-to {
	 opacity: 0;
/*	 transform: translateY(30px);*/
}
 .wrapper {
	 display: flex;
	 align-items: center;
	 flex-direction: column;
	 justify-content: center;
}
 .wrapper .social {
	 margin-top: 1rem;
}
 .wrapper a {
	 padding: 0.6rem;
}
 .wrapper h1 {
	 color: #42b983;
	 font-size: 2rem;
	 font-weight: 300;
}
 .wrapper p {
	 color: #7f8c8d;
	 font-weight: 100;
}
 .wrapper svg {
	 fill: currentcolor;
	 color: #b8c2cc;
	 width: 1.65rem;
	 height: 1.65rem;
	 display: inline-flex;
}

.results{
	padding-top: 0px;
	margin-top: 0px;
}

.item{
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
}

.item:nth-child(odd) {
  background: #f5f6fa;
}

.item{
/*  display: grid;
  grid-template-columns:1fr 1fr 1fr;*/
    padding: 10px;
  border-bottom: 1px solid lightgrey;
}


.item a {
	color: grey;
}

@media screen and (max-width: 1180px){
 
  .header__dropdown-menu {
    position: absolute;
     right: -50px; 
    margin-top: 75px;
	}

	button {
    padding: 1.5px 25px;
}


}
</style>
</style>
