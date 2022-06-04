package com.fipp.jpiadas.repository;

import com.fipp.jpiadas.model.Piada;
import com.fipp.jpiadas.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PiadaRepository extends JpaRepository<Piada,Long> {

    @Query(value = "SELECT * FROM piada ORDER BY pi_ranking LIMIT 1", nativeQuery = true)
    public Usuario getPiadaDoDia();

}
