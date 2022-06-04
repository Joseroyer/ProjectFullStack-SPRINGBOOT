package com.fipp.jpiadas.controller;


import com.fipp.jpiadas.exception.ResourceNotFoundException;
import com.fipp.jpiadas.model.Categoria;
import com.fipp.jpiadas.repository.CategoriaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class CategoriaController {

    @Autowired
    CategoriaRepository categoriaRepository;

    @GetMapping("/categoria")
    public List<Categoria> getAllCategoria(){return this.categoriaRepository.findAll();}

    //Get by Id
    @GetMapping("/categoria/{id}")
    public ResponseEntity<Categoria> getCategoriaById(@PathVariable(value="id") Long categoriaId)
            throws ResourceNotFoundException {
        Categoria categoria = categoriaRepository.findById(categoriaId)
                .orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrada para o código "+ categoriaId));
        return ResponseEntity.ok().body(categoria);
    }

    //Insert Categoria
    @PostMapping("/categoria")
    public Categoria createCategoria(@RequestBody Categoria categoria) {return this.categoriaRepository.save(categoria);}

    //Update Categoria
    @PutMapping("/categoria/{id}")
    public ResponseEntity<Categoria> updateCategoria(@PathVariable (value="id") Long categoriaId,
                                               @RequestBody Categoria categoriaDetails) throws ResourceNotFoundException{
        Categoria categoria = categoriaRepository.findById(categoriaId)
                .orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrada para o código " + categoriaId));
        //PARAMETROS PARA PASSAR

        categoria.setNome(categoriaDetails.getNome());

        //Retorno
        final Categoria updatedCategoria = categoriaRepository.save(categoria);
        return ResponseEntity.ok(updatedCategoria);
    }

    //Delete
    @DeleteMapping("/categoria/{id}")
    public Map<String, Boolean> deleteCategoria(@PathVariable (value = "id") Long categoriaId) throws ResourceNotFoundException{
        Categoria categoria = categoriaRepository.findById(categoriaId)
                .orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrado para o código " + categoriaId));

        this.categoriaRepository.delete(categoria);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


}
