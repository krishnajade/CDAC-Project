package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Hospital;
import com.example.demo.entities.HospitalRequest;
import com.example.demo.entities.Patient;
import com.example.demo.services.HospitalRequestService;

@CrossOrigin(origins="*")
@RestController
public class HospitalRequestController {

	
	@Autowired
	HospitalRequestService hrs;
	
	@PostMapping("/saveRequest")
	public HospitalRequest save(@RequestBody HospitalRequest  h)
	{
		return hrs.save(h);
	}
	
	@GetMapping("/gethospitalRequest/{Hospital_request_id}")
	public HospitalRequest getById(@PathVariable("Hospital_request_id") int id)
	{
		return hrs.getById(id);
	}
	
	@GetMapping("/getAllRequest")
	public List<HospitalRequest> getAll()
	{
		return hrs.getAll();
	}
	
	@GetMapping("/Hospitalrequestbystatus")
	public List<HospitalRequest> getAllByIdStatus(@RequestParam("hospital_id") int id , @RequestParam("request_status") String status)
	{
		return hrs.getAllByIdStatus(id, status);
	}
	
	@PutMapping("/updateHospitalRequest")	
	public int updateHospitalReques(@RequestParam("hospital_request_id") int hospital_request_id, @RequestParam("request_status") String request_status)
	{
		return hrs.updateHospitalRequest(hospital_request_id, request_status);
	}
	
	

}

