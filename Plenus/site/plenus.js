        let botao1 = document.querySelector(".produzir");  
        let botao2 = document.querySelector(".ampliar");
        let botao3 = document.querySelector(".diva");
        let opcao1 = document.querySelector(".sub1");  
        let opcao2 = document.querySelector(".sub2");
        let opcao3 = document.querySelector(".sub3");
        
        let lista = [opcao1, opcao2, opcao3];
        let lista2 = [botao1, botao2, botao3];

        function mudar(opcao, botao){
            for(i of lista){
                if(i != opcao){
                    i.style.display = "none";
                }
                else{
                    opcao.style.display = "block";
                }
            }
        }
        botao1.addEventListener("click", function(){
            mudar(opcao1, botao1);
            for(i of lista2){
                if(i != botao1){
                    i.classList.remove("fundo");
                }
                else{
                    botao1.classList.add("fundo");
                }
            }
        })
        botao2.addEventListener("click", function(){
            mudar(opcao2, botao2);
            for(i of lista2){
                if(i != botao2){
                    i.classList.remove("fundo");
                }
                else{
                    botao2.classList.add("fundo");
                }
            }
        })
        botao3.addEventListener("click", function(){
            mudar(opcao3, botao3);
            for(i of lista2){
                if(i != botao3){
                    i.classList.remove("fundo");
                }
                else{
                    botao3.classList.add("fundo");
                }
            }
        })
        let add = document.querySelector(".add");
        let nome = document.querySelector(".nome");
        let form = document.querySelector(".formulario");
        let fundo = document.querySelector(".fundo-escuro");
        let salvar = document.querySelector("#salvar");
        let fase = document.querySelector(".fase1");

        add.addEventListener("click", function(){
            form.style.display = "block";
            fundo.style.display = "block";
        })
        fundo.addEventListener("click", function(){
            fundo.style.display = "none";
            form.style.display = "none";
        })
        function addHabito(nome){
            let habito = document.createElement("div");
            let texto = document.createElement("p");
            habito.classList.add("habito");
            let nomeHab = document.createTextNode(nome.value);
            texto.appendChild(nomeHab);
            habito.appendChild(texto);
            fase.appendChild(habito);
            
        }
        salvar.addEventListener("click", function(){
            console.log(nome.value);
            addHabito(nome);
            fundo.style.display = "none";
            form.style.display = "none";
        })