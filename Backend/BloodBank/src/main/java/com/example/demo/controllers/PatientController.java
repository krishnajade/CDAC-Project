package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Patient;
import com.example.demo.services.PatientService;

@CrossOrigin(origins="*")
@RestController
public class PatientController {

	@Autowired
	PatientService hserv;
	
	@GetMapping("/getPatient")
	public List<Patient> getAll()
	{
		return hserv.getAll();
	}	
	@PostMapping("/savePatient")
	public Patient save(@RequestBody Patient h)
	{
		return hserv.save(h);
	}	
	@GetMapping("/getPatientById/{hospital_id}")
	public List<Patient> getContact2(@PathVariable("hospital_id") int id)
	{
		return hserv.getPatient(id);
	}	
	@GetMapping("/getpatientbyPatientid/{patient_id}")
	public List<Patient> getpatientbyPatientid(@PathVariable("patient_id") int id)
	{
		return hserv.getpatientbyPatientid(id);
	}	
	 @DeleteMapping("/deletPatient/{patient_id}")
	   public void deletPatient(@PathVariable("patient_id") int patient_id) {
		 hserv.deletPatient(patient_id);
	   }	
}
