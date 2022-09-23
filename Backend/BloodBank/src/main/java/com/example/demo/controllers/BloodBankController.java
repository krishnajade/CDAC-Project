package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BloodBank;
import com.example.demo.services.BloodBankService;

@CrossOrigin(origins="*")
@RestController
public class BloodBankController {
	
	@Autowired
	BloodBankService bbserv;
	
	@GetMapping("/getallbloodbank")
	public List<BloodBank> getAll()
	{
		return bbserv.getAll();
	}
	@GetMapping("/getbloodbank")
	public BloodBank getById(@RequestParam("user_id") int id)
	{
		return bbserv.getById(id);
	}
	@PostMapping("/savebloodbank")
	public BloodBank save(@RequestBody BloodBank b)
	{
		return bbserv.save(b);
	}
	@DeleteMapping("/deleteBloodbank")
	public void deleteBloodbank(@RequestParam("user_id") int id)
	{
		bbserv.deleteBloodbank(id);
	}
	@PutMapping("/updateBloodbank")
	public BloodBank updateBloodbank(@RequestParam("bloodbank_id") int id,@RequestBody BloodBank b)
	{
		return bbserv.updateBloodbank(id,b);
	}
	@PutMapping("/updateBloodbank2")
	public BloodBank updateBloodbank2(@RequestBody BloodBank b)
	{
		return bbserv.save(b);
	}
}
