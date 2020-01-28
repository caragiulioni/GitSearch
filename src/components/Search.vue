
<template>
  <div class="searchBarContainer">
    <div class="search">
      <div class="searchBar">
        <form v-on:submit="queryGitHub(query)">
          <input type="search" placeholder="Search Repositories Ex. Hello World" v-model="query" />
          <div class="searchButtons">
            <button type="submit" v-on:click="isHidden = !isHidden"><i class="fas fa-search"></i></button> 
            <faves class="faves" v-bind:response="response" v-bind:faves="faves" @removed="handleRemove"></faves>
          </div>
        </form>
      </div>

      <div class="results" id="results" v-if="response">
        <div class="notFound" v-if="response.length == 0">
          <p>Sorry buddy, try another search!</p>
        </div>
        <div class="resultsHeadings" v-if="response.length >= 1">
          <h3>Name</h3>
          <div class="language"><h3>Language</h3></div>
        </div>

        <div class="items" v-if="response.length >= 1">
          <div class="item" v-for="(item, index) in response, filteredList" v-bind:id="item.id" :key="index"> 
            <div class="gridOne">
              <a v-bind:href="item.html_url">{{ item.name }}</a>
               <p class="language">{{item.language}}</p>
               <div class="gridTwo itemButton">
                  <button v-on:click="addFave(item.id, item.forks)">Add Fave</i></button>
                </div>
              <div class="expand">
                <a @click="pushItem(index)">Details</a>
              </div>
            </div>

              <div class="expanded" v-show="activeItems.includes(index)">
                <div class="desc"><h3>Description:</h3><p>{{item.description}}</p></div>
                <div class="expandedInner">
                  <div class="gridTwo">
                    <div class="details"><h3>Branch:</h3><p>{{item.default_branch}}</p></div>
                  </div> 
                  <div class="gridTwo">
                    <div class="details"><h3>Forks:</h3><p>{{item.forks}}</p></div>
                    <div class="details"><h3>Watchers:</h3><p>{{item.watchers}}</p></div>
                  </div> 
                </div> <!-- expanded Inner -->
              </div> <!-- end expanded -->
          </div>  <!-- end item -->
        </div>

        <div class="filter" v-if="response.length >= 1">
          <label for="filter">Filter your results here:</label>
          <input type="text" v-model="filter"placeholder="Filter by name..."/>
        </div>
      </div>
    </div>
    </div>
</template>

<script>

export default{
  data () {
    return {
      query:'',
      filter: '',
      response: null,
      items: [],
      faves: [],
      activeItems: [],
      isHidden: true
    }
  },
  methods: {
    queryGitHub(q) {
    if (q.length >= 1){
      fetch('https://api.github.com/search/repositories?q=' + q)
        .then((j) => {
          return j.json();
        })
        .then ((r) => {
        console.log(r);
        //this.response = r.items;

        this.response = r.items.slice(0, 15)
          })
        }
    },
    addFave(id){
      //console.log("click", id);  
      ///console.log(this.response)  
      //references our data object outside of primary method so we can use it elsewhere
      let fave = this.response.filter((item) =>{
          return item.id === id
      })

      this.faves.push(fave[0]);

      let count = this.faves.length;
      console.log(count)
    }, 
    pushItem(index) {
      if(this.activeItems.includes(index)) {
        this.activeItems.splice(this.activeItems.indexOf(index), 1)
      } else {
        this.activeItems.push(index)
      }
    },
    handleRemove(id){
      //console.log('this is been removed', id)
        let newFaves = this.faves.filter((item) => {
        return item.id !== id
      })
      console.log(newFaves)
      this.faves = newFaves;
      }
    }, //end method
    computed: {
    filteredList(item) {
      return this.response.filter((item) => {
        // let lang = item.language;
        // console.log(item.name);
        // console.log(lang);
        return item.name.toLowerCase().includes(this.filter.toLowerCase())
         })
        }
    }
  };


</script>

<style scoped>

  .search{

  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

}


form{
  display: flex;
  justify-content: space-between;

}
input{
  border-radius: 5px;
  height: 32px;
  width: 30vw;
}

 button{
  cursor: pointer;
  border: none;
  background-color: #778ca3;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  margin-left: 15px;
  transition: .3s;
}

 button:hover{
  background-color: #d1d8e0;
}


.searchButtons{
  width: 30%;
  display: flex;
  justify-content: space-between;

}

.searchButtons button, 
.faves{
  width: 40%;
}

.item button{
  margin: 0;
}

a{
  text-decoration: none;
  transition: .3s;
} 

.notFound p{
  color: grey;
  font-size: 1.5rem;
}

.searchBarContainer{
  
}




.notFound{
  font-weight: bold;
  margin-top: -25px;
}

.items{

  border-radius: 5px;


}
.desc{
  margin: 5px 0px;
}

.item{
/*  display: grid;
  grid-template-columns:1fr 1fr 1fr;*/
    padding: 10px;
  border-bottom: 1px solid lightgrey;
}

.language{
  text-align: center;
}


a{
  cursor: pointer;
}

.item a{
  color:#778ca3;
  transition: .3s ease-in-out;

}

h3{
  padding: 0;
} 

a:hover, .itemButton button:hover{
  color: lightgrey;
}

a:visited {
  color: lightgrey;
}

.resultsHeadings{
  color: grey;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 5px 5px 5px;
}

.details{
 display: flex;
 align-items: baseline;;
}

.expand{
  text-align: right;
  font-weight: bold;
}


.expand a{
  font-weight: normal;
}

.expanded{
  margin-top: 5px;
}

.expanded button{

}

.details{
  margin: 3px 0px;
}
.expandedInner{
  display: grid;
  grid-template-columns:1.5fr 1fr 1fr;
 
}

.name{
  text-transform: uppercase;
}


.favesHeading{
  padding: 30px 30px 0px 30px;
}

.favesHeading h3{
  font-size: 1em;
  padding: 8px;
  background: #778CA3;
  color: white;
}

.filter{
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}

label{
  margin-bottom: 5px;
  font-size: .8em;
  font-weight: bold;
  color:grey;
}

.itemButton{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.itemButton button{
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #778ca3;
  font-weight: bold;
  border-radius: 5px;
  margin-left: 15px;
  transition: .3s;
  font-size: 1em;
  font-weight: 200;
}

.faves{
 text-align: right;
}


@media screen and (max-width: 1180px){

  input{
    width: 100%;
    margin-bottom: 10px;
}
 
.searchButtons{
      width: 200px;
    align-self: center;

}

.search, .favorites {
    padding-top: 20px;
}

.search {
    width: 100vw;
    align-items: center;
/*    display: flex;
    flex-direction: column;
*/}

}

</style>