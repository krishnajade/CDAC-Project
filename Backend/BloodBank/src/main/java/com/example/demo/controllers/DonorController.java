package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.Donor;
import com.example.demo.services.DonorService;

@CrossOrigin(origins="*")
@RestController
public class DonorController {
	
	@Autowired
	DonorService dserv;
	
	@GetMapping("/getallDonor")
	public List<Donor> getAll()
	{
		return dserv.getAll();
	}
	@GetMapping("/getDonor")
	public Donor getById(@RequestParam("user_id") int id)
	{
		return dserv.getById(id);
	}
	@PostMapping("/saveDonor")
	public Donor save(@RequestBody Donor d)
	{
		return dserv.save(d);
	}
	@DeleteMapping("/deleteDonor")

	public void deleteDonor(@RequestParam("user_id") int id)
	{
		dserv.deleteDonor(id);
	}
	@PutMapping("/updateDonor")
	public Donor updateDonor(@RequestParam("donor_id") int id,@RequestBody Donor d)
	{
		return dserv.updateDonor(id,d);
	}
	@PutMapping("/updateDonor2")
	public Donor updateDonor2(@RequestBody Donor d)
	{
		return dserv.save(d);
	}
}
