<template>
    
    <div class="container p-4 flex " style="display: flex; flex-wrap: wrap;">
        <div v-for="n in notes" v-bind:key="n">
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Title{{n.title}}</h5>
                    <h5 style="display: hidden;">{{n.idnote}}</h5>
                    <p class="card-text">Body of the car this is teh note{{n.note}}</p>
                    <a href="#" class="btn btn-danger"  v-on:click="deleteNote()">Delete</a>
                </div>
            </div>
        </div>
    </div>


    
  
    
</template>

<script>
    import axios from 'axios'

    //This is a tmp variable as I needed to test the displaying of stuff
    let tmp = [{title:"test", idnote:1, note:"This is my note for the card"},{title:"Do Homework", idnote:2, note:"I really need to finish my homework"},{title:"Submit Project", idnote:3, note:"You should submit your project to the professor"}
    ,{title:"Debug Cors Error", idnote:4, note:"For some reason I can't figure out the cors error to access my backend"},{title:"Debug Cors Error", idnote:4, note:"For some reason I can't figure out the cors error to access my backend"},{title:"Debug Cors Error", idnote:4, note:"For some reason I can't figure out the cors error to access my backend"},{title:"Debug Cors Error", idnote:4, note:"For some reason I can't figure out the cors error to access my backend"},{title:"Debug Cors Error", idnote:4, note:"For some reason I can't figure out the cors error to access my backend"}]

    export default {
        data() {
            return {
                notes: tmp
            }
        },
        methods: {
            getNote() {
                axios
                .get('http://restapinotetaker-env.eba-pjrszvn9.us-east-1.elasticbeanstalk.com/note/notes')
                .then(response => (this.quote = response))
        },

             deleteNote(idnote) {
                axios
                .delete('http://restapinotetaker-env.eba-pjrszvn9.us-east-1.elasticbeanstalk.com/note/delete?id='+idnote)
                .then(response => (this.quote = response))
        },
        }
    }
</script>