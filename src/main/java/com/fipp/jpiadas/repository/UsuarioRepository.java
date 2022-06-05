package com.fipp.jpiadas.repository;

import com.fipp.jpiadas.model.Usuario;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
    
    @Query(value="SELECT * FROM usuario u WHERE u.us_email=filter and  u.us_senha=filter2",nativeQuery=true)
    public List<Usuario> findAllWithFilter(@Param("filter") String filter, @Param("filter2") String filter2);
}
