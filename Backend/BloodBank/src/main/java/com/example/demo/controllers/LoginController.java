package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.services.LoginService;

@CrossOrigin(origins="*")
@RestController
public class LoginController {
	
	@Autowired
	LoginService logserv;
	
	/*@PostMapping("/savelogin")
	public Login savebloodbank(@RequestBody Login l)
	{
		return logserv.save(l);
	}*/
	@PostMapping("/checkLogin")
	public Object checkLogin(@RequestBody Login l)
	{
		return logserv.checkLogin(l.getUser_name(),l.getPassword());
	}
	

	
}
