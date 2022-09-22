package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Hospital;
import com.example.demo.repositories.HospitalRepository;

@Service
public class HospitalService {
	
	@Autowired
	HospitalRepository hosrepo;
	
	public List<Hospital> getAll()
	{
		return hosrepo.findAll();
	}
	public Hospital getById(int id)
	{
		return hosrepo.findById(id).get();
	}
	public Hospital save(Hospital h)
	{
		return hosrepo.save(h);
	}

}
