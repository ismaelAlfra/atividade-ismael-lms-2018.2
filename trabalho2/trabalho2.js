let lista = document.querySelector(".contatos");
let conversas = document.querySelector(".conversas");
let grupos = [{grupo: "Só os Tops!", mensagens: [{user: "Evanilson", msg: "Eaiiiii!"},
            {user: "Edgleyson", msg: "😉"},{user: "Macilon", msg: "Hj é um bom dia pra vender serrote"}]},
            {grupo: "Pirangueiros QXD", mensagens: [{user: "GuiadoPorDeus", msg: "Minha irmã quebrou a perna"},
            {user: "FamozinPJL", msg: "vamo mandar um salve pra ela"},{user: "ÉoTallDoKoringa", msg: "Salve quebrada!!"}]},
            {grupo: "Putarias e Pokémon", mensagens: [{user: "Leleco", msg: "o cara de baixo já me deu"},
            {user: "Bôssa", msg: "qm?"},{user: "Cazalbé", msg: "Haaaaaahahaha!!"}]}];

let deposito1 = [];
let deposito2 = [];
let cores = [];
let nomes = [];
let url = "http://rest.learncode.academy/api/ismael/groups";

function mandar(objetos){
   
    let http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.setRequestHeader("Content-type","application/json");

    http.send(JSON.stringify(objetos));

    http.onreadystatechange = function(){
        if(http.readyState == 4){
            console.log("hospedou");
            recuperar();
        }
    }
}
function recuperar(){
    let http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();

    http.onreadystatechange = function(){
        if(http.readyState == 4){
            console.log("recuperou");

            let coisas = JSON.parse(http.responseText);
            console.log(coisas);
            addGrupo(coisas);
            selecionar();

        }
    }
}

function addGrupo(objeto){
    for(i of objeto[0]){
        let msg_grupo = document.createElement("div");
        let name = document.createElement("div");
        let icone = document.createElement("div");
        let grupo = document.createElement("div");
        let h3 = document.createElement("h3");
        let nome_txt = document.createTextNode(i.grupo);
        let p = document.createElement("p");
        let icone_txt = document.createTextNode(i.grupo[0]);
        h3.appendChild(nome_txt);
        p.appendChild(icone_txt);
        p.classList.add("centra");
        name.appendChild(h3);
        icone.appendChild(p);
        grupo.classList.add("grupo");
        name.classList.add("nome");
        icone.classList.add("icone");
        
        // add mensagens
        if(i.mensagens){
        for(i of i.mensagens){
            let mensagens = document.createElement("div");
            let txt1 = document.createElement("h4");
            txt1.style.color = corAleatoria();
            let txt2 = document.createElement("p");
            let texto = document.createTextNode(i.msg);
            let usuario = document.createTextNode(i.user);
            txt1.appendChild(usuario);
            txt2.appendChild(texto);
            mensagens.appendChild(txt1);
            mensagens.appendChild(txt2);
            mensagens.classList.add("mensagens");
            msg_grupo.appendChild(mensagens);}
        }
        let cor = corAleatoria();
        cores.push(cor);
        icone.style.backgroundColor = cor;
       
        
        msg_grupo.classList.add("msg-grupo");
        conversas.appendChild(msg_grupo);
        deposito2.push(msg_grupo);
        grupo.appendChild(name);
        grupo.appendChild(icone);
        lista.appendChild(grupo);
        deposito1.push(grupo);
    }

}

let grupo = document.querySelector(".grupo");
let boas_vindas = document.querySelector("#welcome");
let msg = document.querySelector(".msg-grupo");
let topo = document.querySelector(".topo-conversa");
let h1 = document.createElement("h1");
topo.appendChild(h1);

function selecionar(){
    for(let i = 0; i < deposito1.length;i++){
        if(deposito1[i].addEventListener("click", function(){
            console.log("clicou");
            deposito2[i].style.display = "block";
            deposito1[i].classList.add("cinza");
            boas_vindas.style.display = "none";
            topo.style.backgroundColor = cores[i];
            topo.querySelector("h1").innerHTML = deposito1[i].firstElementChild.innerText;          
                for(a of deposito2){
                    if(a != deposito2[i]){
                        a.style.display = "none";
                           
                    }
                }
                for(x of deposito1){
                    if(x != deposito1[i]){
                        x.classList.remove("cinza");
                    }
                }
        })){
        }
    }
}
function corAleatoria(){
    let rn = Math.floor((Math.random() * 200) + 1);
    let gn = Math.floor((Math.random() * 200) + 1);
    let bn = Math.floor((Math.random() * 200) + 1);
    let r = rn.toString();
    let g = gn.toString();
    let b = bn.toString();
    let rgb_letras = "rgb(";
    let paren = ")";
    let rgb = rgb_letras.concat(r+", "+ g+", "+ b+ paren);
    return rgb;
}
let entrar = document.querySelector(".entrar");
let entrar2 = document.querySelector("#entrar");
let tela_login = document.querySelector(".tela-login");
let fundo_esc = document.querySelector(".fundo-escuro");
let usuario = document.querySelector("#login");
let add_gp = document.querySelector(".form-add");

entrar.addEventListener("click", function(){
    tela_login.style.display = "block";
    login.style.display = "block";
    add_gp.style.display = "none";
})
fundo_esc.addEventListener("click", function(){
    tela_login.style.display = "none";
})
entrar2.addEventListener("click", function(){
    if(usuario.value != ""){
        let url = "http://rest.learncode.academy/api/ismael/users"
        let http = new XMLHttpRequest;
        http.open("POST", url, true);
        http.setRequestHeader("Content-type","application/json");

        let pessoa = {user : usuario.value};

        http.send(JSON.stringify(pessoa));
         
        http.onreadystatechange = function(){
            if(http.readyState == 4);
            console.log("usuario cadastrado");
            recuperarUser(url);
            tela_login.style.display = "none";
        }
        // http.open("GET", url, true);
        // http.send();

        // http.onreadystatechange = function(){
        //     if(http.readyState == 4){
        //         console.log("usuario recuperado");
        //         let a = JSON.parse(http.responseText);
        //         console.log(a[0]);
        //     }
        // }
    }
    
} )
function recuperarUser(url){
    let http = new XMLHttpRequest;
    http.open("GET", url, true);
    http.send();

    http.onreadystatechange = function(){
        if(http.readyState == 4){
            console.log("usuario recuperado");
            let a = JSON.parse(http.responseText);
            console.log(a[0].user);
            addUsuario(a[0]);
        }
    }
}
function addUsuario(cliente){
    let usuario = document.createElement("div");
    usuario.classList.add("usuario");
    let icone = document.createElement("div");
    icone.classList.add("icone-usu");
    icone.style.backgroundColor = corAleatoria();
    let letra = document.createTextNode(cliente.user[0]);
    icone.appendChild(letra);
    usuario.appendChild(icone);
    let nome = document.createElement("div");
    nome.classList.add("nome-usu");
    let h4 = document.createElement("h4");
    let txt = document.createTextNode(cliente.user);
    h4.appendChild(txt);
    nome.appendChild(h4);
    usuario.appendChild(icone);
    usuario.appendChild(nome);
    let topo =  document.querySelector(".topo");
    topo.appendChild(usuario);


}
let novo_gp = document.querySelector("#icone");
let login = document.querySelector(".login");
let criar = add_gp.querySelector("p");


novo_gp.addEventListener("click", function(){
    tela_login.style.display = "block";
    login.style.display = "none";
    add_gp.style.display ="block";
})

let name_group = document.querySelector("#nome-gp");
let id_group = document.querySelector("#id-gp");
let modelos =  [{user: "Leleco", msg: "o cara de baixo já me deu"},
{user: "Bôssa", msg: "qm?"},{user: "Cazalbé", msg: "Haaaaaahahaha!!"}];

criar.addEventListener("click", function(){
    if(id_group.value =! "" && name_group.value != ""){
        let y = name_group.value;
        let z = id_group.value;
        let new_group = [{grupo: y, id: z, mensagens: modelos}];

        mandar(new_group);
        tela_login.style.display = "none";
    }
    
})


mandar(grupos);
console.log(deposito1);
console.log(deposito2);
// selecionar();
console.log(cores);