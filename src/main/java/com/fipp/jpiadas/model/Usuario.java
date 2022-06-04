package com.fipp.jpiadas.model;

import javax.persistence.*;

@Entity
@Table(name="usuario")
public class Usuario {

    public Usuario() {

    }

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="us_cod")
    private Long id;

    @Column(name="us_nome")
    private String nome;

    @Column(name="us_email")
    private String email;

    @Column(name="us_senha")
    private String senha;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
