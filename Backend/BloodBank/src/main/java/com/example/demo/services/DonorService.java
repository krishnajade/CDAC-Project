package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Donor;
import com.example.demo.repositories.DonorRepository;

@Service
public class DonorService {
	
	@Autowired
	DonorRepository donorrepo;
	
	public List<Donor> getAll()
	{
		return donorrepo.findAll();
	}
	public Donor getById(int Id)
	{
		return donorrepo.findById(Id).get();
	}
	
	public Donor save(Donor d)
	{
		return donorrepo.save(d);
	}

}
