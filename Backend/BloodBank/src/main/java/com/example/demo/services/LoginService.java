package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Admin;
import com.example.demo.entities.BloodBank;
import com.example.demo.entities.Donor;
import com.example.demo.entities.Hospital;
import com.example.demo.entities.Login;
import com.example.demo.repositories.AdminRepository;
import com.example.demo.repositories.BloodBankRepository;
import com.example.demo.repositories.DonorRepository;
import com.example.demo.repositories.HospitalRepository;
import com.example.demo.repositories.LoginRepository;


@Service
public class LoginService {
	
	@Autowired
	LoginRepository loginserv;
	
	@Autowired
	BloodBankRepository bbrepo;
	
	@Autowired
	HospitalRepository hosrepo;
	
	@Autowired
	DonorRepository donrepo;
	
	@Autowired
	AdminRepository adminrepo;
	
	
	public Object checkLogin(String uid,String pwd)
	{
		List<Object[]> a=loginserv.checkLog(uid, pwd);
		BloodBank b=null;
		Hospital h=null;
		Donor d=null;
		Admin ad=null;
		if(a.get(0)[0].equals("bloodbank"))
		{
			b=bbrepo.findByUserId((int)a.get(0)[1]);
			
			return b;
		}
		else if(a.get(0)[0].equals("hospital"))
		{
			h=hosrepo.findByUserId((int)a.get(0)[1]);
			return h;
		}
		else if(a.get(0)[0].equals("donor"))
		{
			d=donrepo.findByUserId((int)a.get(0)[1]);
			return d;
		}
		else if(a.get(0)[0].equals("admin"))
		{
			ad=adminrepo.findByUserId((int)a.get(0)[1]);
			return ad;
		}
		else
		{
			return null;
		}
	}
	
	public void deleteLogin(Login l)
	{
		try {
			loginserv.delete(l);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}

}
