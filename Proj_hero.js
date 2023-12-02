console.log("Heroi")

//construir uma classe generica que represenet 1 heroi - nome - idade - tipo (guerreiro, mago)
// dentro da classe criar método atacar (exibir mensagem - o tipo atacou usando ataque)

class hero{
    constructor(nomeDoHeroi, idade, tipoHeroi){
        this.nomeDoHeroi = nomeDoHeroi
        this.idade = idade
        this.tipoHeroi = tipoHeroi
    }
    
    atacar(){
        if (this.tipoHeroi == "Mago"){
            special = "Magia"
        }else if(this.tipoHeroi == "Guerreiro"){
            special = "Espada"
        }else if(this.tipoHeroi == "Ninja"){
            special = "Shuriken"
        }else{
            special = "Com as mãos"
        }
            
        console.log(`${this.nomeDoHeroi} atacou usando ${special} `)
    }
}

let heroist = new hero("Mandrake","30","Mago")
let heroind = new hero("Kratos", "1000" ,"Guerreiro")
let special

heroist.atacar()
heroind.atacar()