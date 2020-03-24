package com.santiago.backend.api.services;

import java.util.List;
import com.santiago.backend.api.entity.Usuario;

public interface IUsuarioService {

	public List<Usuario> listar();

	public Usuario guardar(Usuario usuario);

	public Usuario listarId(Long id);
	
	public Usuario findById(Long id);
}
