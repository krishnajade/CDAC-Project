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

import com.example.demo.entities.DonorRequest;
import com.example.demo.services.DonorRequestService;

@CrossOrigin(origins="*")
@RestController
public class DonorRequestController {
	
	@Autowired
	DonorRequestService drserv;
	
	@PostMapping("/savedonorrequest")
	public DonorRequest save( @RequestBody DonorRequest dr)
	{
		return drserv.save(dr);
	}
	@GetMapping("alldonorrequestById")
	public List<DonorRequest> getAllById(@RequestParam("bloodbank_id") int id)
	{
		return drserv.getAllById(id);
	}
	
	@GetMapping("donorrequestbystatus")
	public List<DonorRequest> getAllByIdStatus(@RequestParam("bloodbank_id") int id,@RequestParam("status") String st)
	{
		return drserv.getAllByIdStatus(id, st);
	}
	@PutMapping("updatedonorrequest")
	public int updateStatus(@RequestParam("request_id") int id, @RequestParam("status") String st)
	{
		return drserv.updateStatus(id, st);
	}

}
