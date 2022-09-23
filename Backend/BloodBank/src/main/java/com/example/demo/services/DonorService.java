package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Donor;
import com.example.demo.repositories.DonorRepository;
import com.example.demo.repositories.LoginRepository;

@Service
public class DonorService {
	
	@Autowired
	DonorRepository donorrepo;
	@Autowired
	LoginRepository logrepo;
	
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
	public Donor updateDonor(int id,Donor d)
	{
		Donor donor=null;
		try {
			   donor =donorrepo.findById(id).get();
			   
			   if(donor==null)
			   {
				   System.out.println("donor not found");
			   }
			   else
			   {
				   if(d.getDonor_name()!=null)
					   donor.setDonor_name(d.getDonor_name());				   
				   if(d.getAddress()!=null)
					   donor.setAddress(d.getAddress());
				   if(d.getContact_number()!=null)
					   donor.setContact_number(d.getContact_number());
				   if(d.getCity()!=null)
					   donor.setCity(d.getCity());
				   if(d.getAge()!=0)
					   donor.setAge(d.getAge());
				   if(d.getEmail()!=null)
					   donor.setEmail(d.getEmail());				  
				   if(d.getGender()!=null)
					   donor.setGender(d.getGender());
				   if(d.getBlood_group()!=null)
					   donor.setBlood_group(d.getBlood_group());			   
			   }
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		donorrepo.save(donor);
		return donor;
	}
	public void deleteDonor(int id)
	{
		try {
			logrepo.deleteById(id);
			donorrepo.deleteByUserId(id);		
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}
