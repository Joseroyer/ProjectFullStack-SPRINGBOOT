package com.fipp.jpiadas.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fipp.jpiadas.security.JWTTokenProvider;

@RestController
@RequestMapping("/security")
public class SecurityController {

    @PostMapping("/autenticar")
    public ResponseEntity <Object> autenticar(String login, String senha)
    {
        //REMOVER ISSO. SÓ PARA TESTES
        System.out.println("------->"+login+" "+senha);
        String token="";

        //AQUI QUE PEGA DO BANCO
        if (login.equals("meu@email") && senha.equals("123"))
        {
            token = JWTTokenProvider.getToken(login, "ADM");
            System.out.println(token);
            return new ResponseEntity<>(token,HttpStatus.OK);
        }
        else
            return new ResponseEntity<>("ACESSO NAO PERMITIDO",HttpStatus.NOT_ACCEPTABLE);
    }
}
