package com.santiago.banco.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.santiago.banco.modelo.Persona;

@Repository
public interface IPersona extends CrudRepository<Persona, Integer>{

}
