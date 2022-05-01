var primeira_letra = ''

function analisar() {
    var input_email = document.querySelector('#email_usuario').value
    
    primeira_letra = input_email[0]
    
    primeiro_caracter(primeira_letra) //verificar primeiro caracter
    
    letras_maiusculas(input_email) //verificar se tem letras maiusculas
    
    conter_arroba(input_email) //verificar se contem o "@"
    
    sufixo(input_email)

    final(input_email)
}

const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var etapas = 0

function primeiro_caracter(primeiro_caracter) {
    if (alfabeto.includes(primeiro_caracter)) {
        etapas++
    }
}

var verificador = 0
const alfabeto_mai = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function letras_maiusculas(email) {
    for (var contador = 0; contador < email.length-1; contador++) {
        for (var contador2 = 0; contador2 < 26; contador2++) {
            if (alfabeto_mai[contador2] === email[contador]) {
                verificador = 1
            }
        }
    }

    if(verificador === 1) {
        console.log('Com letras maisculas')
    } else {
        etapas++
    }

}

var posicao = 0

function conter_arroba(email) {
    var arroba = '@'

    for (var contador = 0; contador < email.length-1; contador++) {
        if (arroba === email[contador]) {
            verificador = 1
            posicao = contador
        }
    }

    if(verificador === 1) {
        etapas++
    }
}

var lista_especial = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.']
var especial = 0

function sufixo(email) {
    var fim = email.lastIndexOf('.')

    if (posicao == fim-1) {
        especial = 1
    }

    for (var contador = posicao+1; contador < email.length; contador++) {
        if ( lista_especial.includes(email[contador]) ) {
            console.log('ok')
        } else {
            especial = 1
        }
    }

    if (especial == 0) {
        etapas++
    }
}

function final(email) {
    var ponto = '.'
    var posicao_ponto = email.lastIndexOf(ponto)

    var resultado = email.substring(posicao_ponto, posicao_ponto+4)

    if(resultado == '.com') {
        etapas++
    }

    validar()
}

function validar() {
    
    if(etapas == 5) {
        alert('Email valido')
        location.reload()
    } else {
        alert('Email invalido')
        location.reload()
    }
}

function mostrar() {
    alert('1) precisa iniciar com uma letra\n2) nao pode conter letra maiuscula\n3) seguir o template\nprefixo@sufixo.com\n4) o sufixo deve ser sempre um conjunto de LETRAS em minusculo\n5) é permitido usar . no sufixo\n6) o prefixo pode usar chars [0-9] contanto que não seja o primeiro char')
}