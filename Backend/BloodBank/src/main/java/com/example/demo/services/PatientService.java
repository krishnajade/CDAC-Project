package com.example.demo.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Patient;
import com.example.demo.repositories.PatientRepository;
@Service
public class PatientService {

	@Autowired
	PatientRepository prep;
	
	public Patient save(Patient h)
	{
		return prep.save(h);
	}
	
	public List<Patient> getAll()
	{
		return prep.findAll();
	}
	

	public List<Patient> getPatient(int lnm)
	{
		return prep.getpatientbyid(lnm);
	}
	
	public List<Patient> getpatientbyPatientid(int lnm)
	{
		return prep.getpatientbyPatientid(lnm);
	}
	
	public void deletPatient(int pid) {
		prep.deleteById(pid);
	   }
	
	
}
