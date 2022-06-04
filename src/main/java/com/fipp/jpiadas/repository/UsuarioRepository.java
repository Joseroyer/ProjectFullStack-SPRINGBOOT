package com.fipp.jpiadas.repository;

import com.fipp.jpiadas.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

}
