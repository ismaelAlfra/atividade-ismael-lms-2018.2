function cadastrar(nome,id){
    $.ajax({
        type: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users',
        data: {senha: id, nome: nome, prodts:""},
        success: function(data){
            console.log(data);
    }
    })
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users?nome='+nome,
        success: function(data){
            console.log(data);
            localStorage.clear();
            localStorage.setItem("id", data[0].senha);
            localStorage.setItem("nome", data[0].nome);
            localStorage.setItem("idDados", data[0].id);
            $(".dropdown").css("display", "none");
            $("#sair").css("display", "block");
            $("#compras").css("display", "block");
            alert("Bem vindo "+ data[0].senha + "!");
            $("#user").append(data[0].senha);
            comprar();
    }
    })
}
$("#cadas").click(function(){
    if($("#nome").val() != "" && $("#id").val() != ""){
        cadastrar($("#nome").val(),  $("#id").val());
    }
    else{
        alert("Preencha os dois campos");
    }
})
$("#login").click(function(){
    let x = $("#log").val();
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users?nome='+x,
        success: function(data){
            console.log(data);
            if(data[0].nome != undefined){ 
                localStorage.setItem("id", data[0].senha);
                localStorage.setItem("nome", data[0].nome);
                localStorage.setItem("idDados", data[0].id);
                $(".dropdown").css("display", "none");
                $("#sair").css("display", "block");
                $("#compras").css("display", "block");
                alert("Bem vindo "+ data[0].senha + "!");
                $("#user").append(data[0].senha);
                comprar();
            }
            else{
                alert("Usuário não existe");
            }
        },
        error: function(){
            console.log("Usuário não existe");
        }  
    })
})
$("#sair").click(function(){
    localStorage.clear();
    $(".dropdown").css("display", "block");
    $("#sair").css("display", "none");
    $("#compras").css("display", "none");
    $("#user").text("");
})

let cols = document.querySelectorAll(".col-md-3");
console.log(cols);
let id = 0;
for(i of cols){
    i.setAttribute('id', id);
    id++;
} 

let logado = localStorage.nome;
if(logado != undefined){
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users?nome='+logado,
        success: function(data){
            console.log(data);
            localStorage.clear();
            localStorage.setItem("id", data[0].senha);
            localStorage.setItem("nome", data[0].nome);
            localStorage.setItem("idDados", data[0].id);
            $(".dropdown").css("display", "none");
            $("#sair").css("display", "block");
            $("#compras").css("display", "block");
            // alert("Bem vindo "+ data[0].nome + "!");
            $("#user").append(data[0].senha);
            comprar();
        }
    })
    
}
// function comprar(){
//     if(localStorage.nome){
//         for(i of cols){
//             i.children[1].addEventListener("click", function(){
//                 alert("Produto adicionado em Suas Compras");
//             }) 
//         }
//     }
// }
function comprar(){
    for(i of cols){
        let lista_pro = []; 
        i.children[1].addEventListener("click", function(){
            lista_pro.push(i.id);

            $.ajax({
                type: "PUT",
                url: 'https://jsonplaceholder.typicode.com/users/'+localStorage.idDados,
                data: {senha: localStorage.id, nome: localStorage.nome, prodts: lista_pro.toString()},
                success: function(data){
                    console.log(data);
                }
            })
        }) 
    }
}