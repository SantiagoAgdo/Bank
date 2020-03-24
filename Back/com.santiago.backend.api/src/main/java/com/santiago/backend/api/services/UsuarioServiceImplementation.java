package com.santiago.backend.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.santiago.backend.api.dao.IUsuarioDao;
import com.santiago.backend.api.entity.Usuario;

@Service
public class UsuarioServiceImplementation implements IUsuarioService {

	@Autowired
	private IUsuarioDao usuarioDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Usuario> listar() {
		return (List<Usuario>) usuarioDao.findAll();
	}

	@Override
	@Transactional
	public Usuario guardar(Usuario usuario) { 
		return usuarioDao.save(usuario);
	}

	@Override
	@Transactional(readOnly = true)
	public Usuario listarId(Long id) {
		return usuarioDao.findById(id).orElse(null);
	}

	@Override
	@Transactional(readOnly = true)
	public Usuario findById(Long id) {
		return usuarioDao.findById(id).orElse(null);
	}
	
}
