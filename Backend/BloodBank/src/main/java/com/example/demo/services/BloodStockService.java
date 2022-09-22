package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.BloodStock;
import com.example.demo.repositories.BloodStockRepository;

@Service
public class BloodStockService {
	
	@Autowired
	BloodStockRepository bsrepo;
	
	public BloodStock saveBloodStock(BloodStock bs)
	{
		return bsrepo.save(bs);
	}
	
	public List<BloodStock> getall()
	{
		return bsrepo.findAll();
	}
	public List<BloodStock> getAllById(int id)
	{
		return bsrepo.getAllById(id);
	}
	
	public int updateBloodStock(int id,int qnt)
	{
		return bsrepo.updateBloodStock(id, qnt);
	}
	

}
