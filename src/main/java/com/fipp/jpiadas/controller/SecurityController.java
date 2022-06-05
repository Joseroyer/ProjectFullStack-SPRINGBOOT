package com.fipp.jpiadas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fipp.jpiadas.model.Usuario;
import com.fipp.jpiadas.repository.UsuarioRepository;
import com.fipp.jpiadas.security.JWTTokenProvider;

@RestController
@RequestMapping("/security")
public class SecurityController {

    @Autowired
    UsuarioRepository usuarioRepository;

    @GetMapping("/autenticar")
    public ResponseEntity<Object> autenticar( String email, 
    @RequestBody String senha) {
        List<Usuario> user = usuarioRepository.findAllWithFilter(email,senha);
        // int flag = 0;
        // for (int i = 0; i < user.size(); i++) {
        //     if (senha.equals(user.get(i).getSenha()) && login.equals(user.get(i).getEmail()))
        //         flag = 1;
        // }
        String token = "";
        if (user!=null) {
            token = JWTTokenProvider.getToken(senha, "ADM");
            System.out.println(token);
            return new ResponseEntity<>(token, HttpStatus.OK);
        } else
            return new ResponseEntity<>("ACESSO NAO PERMITIDO", HttpStatus.NOT_ACCEPTABLE);
    }
}
