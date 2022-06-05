package com.fipp.jpiadas.model;

import javax.persistence.*;

@Entity
@Table(name="piada")
public class Piada {
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="pi_id")
    private Long id;

    @Column(name="pi_titulo")
    private String titulo;

    @Column(name="pi_texto")
    private String texto;

    @Column(name="pi_keywords")
    private String keywords;

    @Column(name="pi_ranking")
    private int ranking;

    @ManyToOne
    @JoinColumn(name="cat_id", nullable=false)
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name="us_cod", nullable=false)
    private Usuario fk_user;

    public Piada() {
    }

    public Piada(Long id, String titulo, String texto, String keywords, int ranking, Categoria categoria) {
        super();
        this.id = id;
        this.titulo = titulo;
        this.texto = texto;
        this.keywords = keywords;
        this.ranking = 0;
        this.categoria = categoria;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }


    public Usuario getFk_user() {
        return fk_user;
    }

    public void setFk_user(Usuario fk_user) {
        this.fk_user = fk_user;
    }
}
