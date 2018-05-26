var Song = Backbone.Model.extend({
    defaults: {
        genre: "vallenato"
    },
    initialize: function(){
        console.log("new song");
    }
});

var song = new Song();
song.set("title", "El santo cachon");

var song2 = new Song();
song2.set({
    "artist": "Diomedez",
    "title": "Los recuerdos de ella"
})

var song3 = new Song({
    artist: "Maluma",
    title: "felices los 4"
});