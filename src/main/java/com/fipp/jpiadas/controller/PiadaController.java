package com.fipp.jpiadas.controller;

import com.fipp.jpiadas.exception.ResourceNotFoundException;
import com.fipp.jpiadas.model.Piada;
import com.fipp.jpiadas.model.Usuario;
import com.fipp.jpiadas.repository.PiadaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/apis")
public class PiadaController {

    @Autowired
    PiadaRepository piadaRepository;
    List<Piada> piadas;

    // Lista ela, e retorno em JSON
    @GetMapping("/piada/listar")
    public ResponseEntity<Object> listarPiada() {
        piadas = piadaRepository.findAll();
        return new ResponseEntity<>(piadas, HttpStatus.OK);
    }
    //
    @GetMapping("/listar-piadas")
    public ResponseEntity<Object> listarPiadasFiltro(@RequestParam(value = "filtro") String filtro) {
        piadas = piadaRepository.findAllWithFilter(filtro.toLowerCase());
        return new ResponseEntity<>(piadas, HttpStatus.OK);
    }

    //UPDATE PIADA - USADADA NO CONTADOR DE RANKING
    @RequestMapping("/update")
    public ResponseEntity <Object> update(@RequestParam(value = "id")int id)
    {   
        int piadas = piadaRepository.findAllWithFilter2(id);
        return new ResponseEntity<>(piadas,HttpStatus.OK);
    }

    // Insert Piada
    @PostMapping("/piada")
    public Piada createPiada(@RequestBody Piada piada) {
        Usuario user = new Usuario(Long.parseLong("1"), "teste", "teste@teste", "1234");
        piada.setFk_user(user);
        piada.setKeywords(piada.getKeywords().toLowerCase());
        return this.piadaRepository.save(piada);
    }

    // Get by Id
    @GetMapping("/piada/{id}")
    public ResponseEntity<Piada> getPiadaById(@PathVariable(value = "id") Long piadaId)
            throws ResourceNotFoundException {
        Piada piada = piadaRepository.findById(piadaId)
                .orElseThrow(() -> new ResourceNotFoundException("Piada n??o encontrada para o c??digo " + piadaId));
        return ResponseEntity.ok().body(piada);
    }

    // Update Categoria
    @PutMapping("/piada/{id}")
    public ResponseEntity<Piada> updatePiada(@PathVariable(value = "id") Long piadaId,
            @RequestBody Piada piadaDetails) throws ResourceNotFoundException {
        Piada piada = piadaRepository.findById(piadaId)
                .orElseThrow(() -> new ResourceNotFoundException("Piada n??o encontrada para o c??digo " + piadaId));
        // PARAMETROS PARA PASSAR (NAO ESQUECER DE POR TODOS)

        piada.setCategoria(piadaDetails.getCategoria());
        piada.setKeywords(piadaDetails.getKeywords());
        piada.setTexto(piadaDetails.getTexto());
        piada.setTitulo(piadaDetails.getTitulo());
        piada.setFk_user(piadaDetails.getFk_user());

        // Retorno
        final Piada updatedPiada = piadaRepository.save(piada);
        return ResponseEntity.ok(updatedPiada);

    }

    // Delete
    @DeleteMapping("/piada/{id}")
    public Map<String, Boolean> deletePiada(@PathVariable(value = "id") Long piadaId) throws ResourceNotFoundException {
        Piada piada = piadaRepository.findById(piadaId)
                .orElseThrow(() -> new ResourceNotFoundException("Piada n??o encontrado para o c??digo " + piadaId));

        this.piadaRepository.delete(piada);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
