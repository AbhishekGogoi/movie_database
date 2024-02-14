use MovieDB

db.createCollection("movies")
db.createCollection("directors")
db.createCollection("actors")

db.movies.insertMany([{title:"The Shawshank Redemption",release_year:1994,genre:"Drama",director:"Frank Darabont",actors:["Tim Robbins","Morgan Freeman"]},{title:"The Godfather",release_year:1972,genre:"Crime",director:"Francis Ford Coppola",actors:["Marlon Brando","Al Pacino"]},{title:"The Dark Knight",release_year:2008,genre:"Action",director:"Christopher Nolan",actors:["Christian Bale","Heath Ledger"]},{title:"Pulp Fiction",release_year:1994,genre:"Crime",director:"Quentin Tarantino",actors:["John Travolta","Uma Thurman"]},{title:"Forrest Gump",release_year:1994,genre:"Drama",director:"Robert Zemeckis",actors:["Tom Hanks","Robin Wright"]},{title:"The Matrix",release_year:1999,genre:"Science Fiction",director:"The Wachowskis",actors:["Keanu Reeves","Laurence Fishburne"]},{title:"Inception",release_year:2010,genre:"Science Fiction",director:"Christopher Nolan",actors:["Leonardo DiCaprio","Joseph Gordon-Levitt","Ellen Page"]},{title:"Fight Club",release_year:1999,genre:"Drama",director:"David Fincher",actors:["Brad Pitt","Edward Norton"]},{title:"Goodfellas",release_year:1990,genre:"Crime",director:"Martin Scorsese",actors:["Robert De Niro","Ray Liotta"]},{title:"The Silence of the Lambs",release_year:1991,genre:"Thriller",director:"Jonathan Demme",actors:["Anthony Hopkins","Jodie Foster"]}]);


db.directors.insertMany([{name:"Frank Darabont",nationality:"American",movies_directed:["The Shawshank Redemption"]},{name:"Francis Ford Coppola",nationality:"American",movies_directed:["The Godfather"]},{name:"Christopher Nolan",nationality:"British",movies_directed:["The Dark Knight","Inception"]},{name:"Quentin Tarantino",nationality:"American",movies_directed:["Pulp Fiction"]},{name:"Robert Zemeckis",nationality:"American",movies_directed:["Forrest Gump"]}]);


db.actors.insertMany([{name:"Tim Robbins", nationality:"American", movies_acted_in:["The Shawshank Redemption"]},{name:"Morgan Freeman", nationality:"American", movies_acted_in:["The Shawshank Redemption"]},{name:"Marlon Brando", nationality:"American", movies_acted_in:["The Godfather"]},{name:"Al Pacino", nationality:"American", movies_acted_in:["The Godfather"]},{name:"Christian Bale", nationality:"British", movies_acted_in:["The Dark Knight"]},{name:"Heath Ledger", nationality:"Australian", movies_acted_in:["The Dark Knight"]},{name:"John Travolta", nationality:"American", movies_acted_in:["Pulp Fiction"]},{name:"Uma Thurman", nationality:"American", movies_acted_in:["Pulp Fiction"]}]);



db.movies.find({ release_year: 2010 });

db.movies.find({ genre: "Science Fiction" });

db.movies.find({ director: "Christopher Nolan" });

db.movies.find({ actors: "Leonardo DiCaprio" });

db.directors.find({ nationality: "British" });

db.actors.find({ nationality: "American" });



