package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.BloodBank;
import com.example.demo.entities.Login;
import com.example.demo.repositories.BloodBankRepository;
import com.example.demo.repositories.LoginRepository;

@Service
public class BloodBankService {
	
	@Autowired
	BloodBankRepository bloodbankrepo;
	@Autowired
	LoginRepository logrepo;
	
	public List<BloodBank> getAll()
	{
		return bloodbankrepo.findAll();
	}
	public BloodBank getById(int Id)
	{
		return bloodbankrepo.findById(Id).get();
	}
	
	public BloodBank save(BloodBank b)
	{
		return bloodbankrepo.save(b);
	}
	
	public void deleteBloodbank(int id)
	{
		try {
			logrepo.deleteById(id);
			bloodbankrepo.deleteByUserId(id);
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public BloodBank updateBloodbank(int id,BloodBank b)
	{
		BloodBank bloodbank=null;
		try {
			   bloodbank =bloodbankrepo.findById(id).get();
			   
			   if(bloodbank==null)
			   {
				   System.out.println("user not found");
			   }
			   else
			   {
				   if(b.getBloodbank_name()!=null)
					   bloodbank.setBloodbank_name(b.getBloodbank_name());
				   if(b.getLicence_no()!=null)
					   bloodbank.setLicence_no(b.getLicence_no());
				   if(b.getAddress()!=null)
					   bloodbank.setAddress(b.getAddress());
				   if(b.getContact_number()!=null)
					   bloodbank.setContact_number(b.getContact_number());
				   if(b.getCity()!=null)
					   bloodbank.setCity(b.getCity());
				   if(b.getEmail()!=null)
					   bloodbank.setEmail(b.getEmail());
				   if(b.getWebsite()!=null)
					   bloodbank.setWebsite(b.getWebsite());
			   }
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		bloodbankrepo.save(bloodbank);
		return bloodbank;
	}
	
}
