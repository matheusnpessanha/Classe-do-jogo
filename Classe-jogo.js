class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        
    }
    
    
    Atacar () {

        let tipoAtaque
        
        switch(this.tipo){

            case "Guerreiro":
                tipoAtaque = "Espada"
            break

            case "Mago":
                tipoAtaque = "magica"
            break

            case "Monge":
                tipoAtaque = "Artes marciais"
            break

            case "Ninja":
                tipoAtaque = "shuriken"
            break
        }
   

        for (let i = 1; i < 5; i++) {
            console.log("Carregando o ataque "+ this.nome + " " +i+ "/5")
        }

        console.log("Carregamento Completo!")

        console.log("o " + (this.tipo) + " " + (this.nome) + " atacou usando " + tipoAtaque);
    }
    

}

let heroiGuerreiro = new Heroi ("thor", 300, "Guerreiro")
    heroiGuerreiro.Atacar()

let heroiMago = new Heroi ("Merlin", 90, "Mago")
    heroiMago.Atacar()

let heroiNinja = new Heroi ("Jackie Chan", 40, "Ninja")
    heroiNinja.Atacar()

let heroiMonge = new Heroi ("Roger Gracie", 30, "Monge")
    heroiMonge.Atacar()
