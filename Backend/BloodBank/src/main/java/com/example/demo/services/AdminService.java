package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	AdminRepository adminrepo;

}
