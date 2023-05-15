const http=require('http');

const serveur=http.createServer((requete,reponse)=>{
    console.log("serveur crée");
})

serveur.listen(3000,"localhost",()=>{
    console.log("ecuter bien");
})