var Song = Backbone.Model.extend({
    defaults: {
        genre: "vallenato"
    },
    initialize: function(){
        console.log("new song");
    },
    validate: function(attrs){
        if(!attrs.title){
            return "Title is required"; 
        }
    }
});

var song = new Song();

var Animal = Backbone.Model.extend({
    walk: function(){
        console.log("Animal Walking");
    }
});

var Dog = Animal.extend({
    walk: function(){
        Animal.prototype.walk(this);
        console.log("Dog walking");
    }
})

var dog = new Dog();