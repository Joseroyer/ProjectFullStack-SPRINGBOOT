package com.fipp.jpiadas.repository;

import com.fipp.jpiadas.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

    @Query(value="SELECT * FROM categoria c WHERE c.cat_nome LIKE :filter%",nativeQuery=true)
    public List<Categoria> findAllWithFilter(@Param("filter") String filter);

}
