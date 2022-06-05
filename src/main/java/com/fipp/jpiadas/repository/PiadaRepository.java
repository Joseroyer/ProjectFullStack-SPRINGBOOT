package com.fipp.jpiadas.repository;

import com.fipp.jpiadas.model.Piada;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PiadaRepository extends JpaRepository<Piada,Long> {

    @Query(value = "SELECT * FROM piada P INNER JOIN categoria C on P.cat_id = C.cat_id where p.pi_keyword LIKE %:filter% AND p.cat_nome LIKE %:filter% ORDER BY pi_ranking desc", nativeQuery = true)
    public List<Piada> findAllWithFilter(@Param("filter") String filter);

}
