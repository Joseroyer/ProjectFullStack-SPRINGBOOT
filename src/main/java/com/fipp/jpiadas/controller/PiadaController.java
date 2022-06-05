package com.fipp.jpiadas.controller;

import com.fipp.jpiadas.exception.ResourceNotFoundException;
import com.fipp.jpiadas.model.Categoria;
import com.fipp.jpiadas.model.Piada;
import com.fipp.jpiadas.repository.PiadaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PiadaController {

    @Autowired
    PiadaRepository piadaRepository;

    // @GetMapping("/piada")
    // public List<Piada> getAllPiada(){ return this.piadaRepository.findAll(); }

    //Insert Piada
    @PostMapping("/piada")
    public Piada createPiada(@RequestBody Piada piada) {return this.piadaRepository.save(piada);}

    //Get by Id
    @GetMapping("/piada/{id}")
    public ResponseEntity<Piada> getPiadaById(@PathVariable(value="id") Long piadaId)
            throws ResourceNotFoundException {
        Piada piada = piadaRepository.findById(piadaId)
                .orElseThrow(() -> new ResourceNotFoundException("Piada não encontrada para o código "+ piadaId));
        return ResponseEntity.ok().body(piada);
    }

    //Piada do dia (CORRIGIR)
    @GetMapping("/piada/dia")
    public ResponseEntity<Piada> getPiadaDoDia(@PathVariable (value="id") Long piadaId)
        throws ResourceNotFoundException{
     //  Piada piada = piadaRepository.getPiadaDoDia()
        return null;
    }

    

    //Update Categoria
    @PutMapping("/piada/{id}")
    public ResponseEntity<Piada> updatePiada(@PathVariable (value="id") Long piadaId,
                                                     @RequestBody Piada piadaDetails) throws ResourceNotFoundException{
        Piada piada = piadaRepository.findById(piadaId)
                .orElseThrow(() -> new ResourceNotFoundException("Piada não encontrada para o código " + piadaId));
        //PARAMETROS PARA PASSAR (NAO ESQUECER DE POR TODOS)

        piada.setCategoria(piadaDetails.getCategoria());
        piada.setKeywords(piadaDetails.getKeywords());
        piada.setTexto(piadaDetails.getTexto());
        piada.setTitulo(piadaDetails.getTitulo());


        //Retorno
        final Piada updatedPiada = piadaRepository.save(piada);
        return ResponseEntity.ok(updatedPiada);

    }

    //Delete
    @DeleteMapping("/piada/{id}")
    public Map<String, Boolean> deletePiada(@PathVariable (value = "id") Long piadaId) throws ResourceNotFoundException{
        Piada piada = piadaRepository.findById(piadaId)
                .orElseThrow(() -> new ResourceNotFoundException("Piada não encontrado para o código " + piadaId));

        this.piadaRepository.delete(piada);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }





}
