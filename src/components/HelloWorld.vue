<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <div>map: {{ r }}</div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      width: 500,
      height: 500,
      r: 751
    }
  },
  // mounted: function(){
  //   var svg = d3.select('#circle-001');
  //   this.circle = svg.append('circle')
  //                     .attr('cx', this.width/2)
  //                     .attr('cy', this.height/2)
  //                     .attr('r', this.r)
  //                     .style('fill','rgba(0, 0, 0, 0.8)')
  // }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
