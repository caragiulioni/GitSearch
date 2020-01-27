<template>

  <div id="app">
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Abel');

html, body, button{
  font-family: 'Abel', sans-serif;
  font-size: 62.5%;
}

body {
  font-family: 'Abel', sans-serif;
  overflow: hidden;
  font-size: 1.5rem;
}

#app {
  font-family: 'Abel', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body, h1{
  margin: 0;
}

h2{
padding: 5px 10px 10px 5px;
font-size: 1.5rem;
background-color: #778CA3;
color:white;
}

h3{
  font-weight: 200;
  padding: 5px;
}


form, .items,  .header__dropdown-menu {
  width: 40vw;
    }

.items{
    height: 48vh;
}

.items,  .header__dropdown-menu {
  overflow-y: scroll;
  overflow-x: hidden;
}

/*SCROLL BAR*/

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #C3C3C3; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #969696; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #878787; 
}



.search, .favorites{
  padding-top: 35px;
  margin: 0 auto;
}


.item:nth-child(odd) {
  background: #f5f6fa;
}

 .header__dropdown-menu{

  }

  .results, .header__dropdown-menu{
  background: #fff;
  border-radius: 4px;
}

.results{
    padding-top: 35px;
}

.resultsHeadings{
  color: grey;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 5px 5px 5px;
}

.gridOne, .resultsHeadings{
  display: grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
}


@media screen and (max-width: 1180px){
 
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }

  .header__dropdown-menu {
    text-align: left;
    height: 50vh;
    position: absolute;
    /* right: 0; */
    overflow-y: auto;
    margin-top: 75px;
}

form, .items, .header__dropdown-menu {
    width:300px;
}
}
</style>
