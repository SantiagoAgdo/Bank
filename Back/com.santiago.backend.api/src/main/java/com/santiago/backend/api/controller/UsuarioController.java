package com.santiago.backend.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.santiago.backend.api.entity.Usuario;
import com.santiago.backend.api.services.IUsuarioService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class UsuarioController {
	
	@Autowired
	private IUsuarioService usuarioService;
	
	@GetMapping("/lista")
	public List<Usuario> index(){
		return usuarioService.listar();
	}
	
	@PostMapping("/crearregistro")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario crearRegistro(@RequestBody Usuario usuario) {
		return usuarioService.guardar(usuario);
	}
	
	@GetMapping("/lista/{id}")
	public Usuario show(@PathVariable Long id) {
		return usuarioService.findById(id); 
	}
	
	@PutMapping("/lista/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario actualizar(@RequestBody Usuario usuario, @PathVariable Long id) {
		Usuario user = usuarioService.listarId(id);
		
		user.setTarjeta(usuario.getTarjeta());
		user.setEstablecimiento(usuario.getEstablecimiento());
		user.setFecha(usuario.getFecha());
		user.setValor(usuario.getValor());
		
		return usuarioService.guardar(user);
	}
}
