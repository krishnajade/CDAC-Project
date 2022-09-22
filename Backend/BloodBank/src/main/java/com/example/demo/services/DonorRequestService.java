package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.DonorRequest;
import com.example.demo.repositories.DonorRequestRepository;

@Service
public class DonorRequestService {
	
	@Autowired
	DonorRequestRepository drrepo;
	
	public DonorRequest save(DonorRequest dr)
	{
		return drrepo.save(dr);
	}
	
	public List<DonorRequest> getAllById(int id)
	{
		return drrepo.getAllById(id);
	}
	
	public List<DonorRequest> getAllByIdStatus(int id,String st)
	{
		return drrepo.getAllByIdStatus(id, st);
	}
	
	public int updateStatus(int id,String st)
	{
		return drrepo.updateStatus(id, st);
	}

}
