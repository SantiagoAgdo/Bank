package com.santiago.backend.api.dao;

import org.springframework.data.repository.CrudRepository;
import com.santiago.backend.api.entity.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario, Long> {

}
