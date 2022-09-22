package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BloodStock;
import com.example.demo.services.BloodStockService;

@CrossOrigin(origins="*")
@RestController
public class BloodStockController {
	
	@Autowired 
	BloodStockService bsserv;
	
	@PostMapping("/savebloodstock")
	public BloodStock saveBloodStock(@RequestBody BloodStock bs)
	{
		return bsserv.saveBloodStock(bs);
	}
	@GetMapping("allbloodstock")
	public List<BloodStock> getAll()
	{
		return bsserv.getall();
	}
	@GetMapping("allBloodStockById")
	public List<BloodStock> getAllById(@RequestParam("bloodbank_id") int id)
	{
		return bsserv.getAllById(id);
	}
	@PutMapping("updatebloodstock")
	public int updateBloodStock(@RequestParam("bloodstock_id") int id,@RequestParam("quantity") int qnt)
	{
		return bsserv.updateBloodStock(id, qnt);
	}

}
