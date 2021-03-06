package com.fipp.jpiadas.controller;

import com.fipp.jpiadas.exception.ResourceNotFoundException;
import com.fipp.jpiadas.model.Usuario;
import com.fipp.jpiadas.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/apis")
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    //INSERT USUARIO
    @PostMapping("/usuario")
    public Usuario createUsuario(@RequestBody Usuario usuario) { 
        return this.usuarioRepository.save(usuario); 
    }


    @GetMapping("/usuario-listar")
    public ResponseEntity getAllUsuario() { 
        List <Usuario> user = usuarioRepository.findAll();
        return new ResponseEntity<>(user,HttpStatus.OK);
     }

    //GET BY ID
    @GetMapping("/usuario/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable(value="id") Long usuarioId)
        throws ResourceNotFoundException {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario nao encontrado com codigo " + usuarioId));
        return ResponseEntity.ok().body(usuario);
    }

    
    //UPDATE CATEGORIA
    @PutMapping("/usuario/{id}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable (value="id") Long usuarioId,
                                                 @RequestBody Usuario usuarioDetails) throws ResourceNotFoundException{
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario nao encontrado para o codigo " +usuarioId));
        //PARAMETROS P PASSAR

        usuario.setNome(usuarioDetails.getNome());
        usuario.setSenha(usuarioDetails.getSenha());
        usuario.setEmail(usuarioDetails.getEmail());

        //RETORNO

        final Usuario updatedUsuario = usuarioRepository.save(usuario);
        return ResponseEntity.ok(updatedUsuario);
    }

    //DELETE USUARIO

    @DeleteMapping("/usuario/{id}")
    public Map<String,Boolean> deleteUsuario(@PathVariable (value="id") Long usuarioId) throws ResourceNotFoundException{
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario nao encontrado para o codigo " + usuarioId));

        this.usuarioRepository.delete(usuario);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return response;

    }
}
