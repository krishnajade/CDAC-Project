package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.HospitalRequest;

import com.example.demo.repositories.HospitalRequestRepository;

@Service
public class HospitalRequestService {

	@Autowired
	HospitalRequestRepository hrsrp;
	
	public HospitalRequest save(HospitalRequest h)
	{
		return hrsrp.save(h);
	}
	
	public HospitalRequest getById(int id)
	{
		return hrsrp.findById(id).get();
	}
	
	public List<HospitalRequest> getAll()
	{
		return hrsrp.findAll();
	}
	
	public List<HospitalRequest>  getAllByIdStatus(int id, String str)
	{
		return hrsrp.getAllByIdStatus(id, str);
	}
	
	public int updateHospitalRequest(int hospital_request_id, String request_status)
	{
		return hrsrp.updateStatus(hospital_request_id, request_status);
	}


}
