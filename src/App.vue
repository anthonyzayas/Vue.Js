<template>
  <div id="app">
      <Notes />
     
  </div>
</template>

  <script>

    import Notes from './components/Notes'
    import axios from 'axios'

    export default {
      name: 'app',
      components: {
        Notes,
       
      },
      data (){
        return { quote: null}
       
      },
      mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.quote = response))
  }
    }
     
  </script>

  <style>
    html, body, #app {
        height: 100%;
    }

    body {
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        display: flex;
        flex-direction: row;
    }
  </style>