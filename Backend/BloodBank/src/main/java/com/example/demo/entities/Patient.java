package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name="patient")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int patient_id ;
	@Column(nullable = false )
	String patient_fname ;
	@Column(nullable = false )
	String patient_lname ;
	@Column(nullable = false , unique=true)
	String Aadharnumber ;
	@Column(nullable = false , unique=true)
	String phoneNumber ;
	@Column(nullable = false )
	int age ;
	@Column(nullable = false )
	String Gender ;
	@Column(nullable = false )
	String bloodgrp ;
	@Column( unique=true)
	String City ;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(nullable = false )
	Date registration_date ;
	
	@JsonIgnoreProperties("patient")
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="hospital_id")
	Hospital hospital;

	
	
	public Patient() {
		super();
	}

	
	



	public Patient(int patient_id, String patient_fname, String patient_lname, String aadharnumber, String phoneNumber,
			int age, String gender, String bloodgrp, String city, Date registration_date ) {
		super();
		this.patient_id = patient_id;
		this.patient_fname = patient_fname;
		this.patient_lname = patient_lname;
		Aadharnumber = aadharnumber;
		this.phoneNumber = phoneNumber;
		this.age = age;
		Gender = gender;
		this.bloodgrp = bloodgrp;
		City = city;
		this.registration_date = registration_date;
		
	}






	public Patient(int patient_id, String patient_fname, String patient_lname, String aadharnumber, String phoneNumber,
			int age, String gender, String bloodgrp, String city, Date registration_date, Hospital hospital) {
		super();
		this.patient_id = patient_id;
		this.patient_fname = patient_fname;
		this.patient_lname = patient_lname;
		Aadharnumber = aadharnumber;
		this.phoneNumber = phoneNumber;
		this.age = age;
		Gender = gender;
		this.bloodgrp = bloodgrp;
		City = city;
		this.registration_date = registration_date;
		this.hospital = hospital;
	}






	public int getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}

	public String getPatient_fname() {
		return patient_fname;
	}

	public void setPatient_fname(String patient_fname) {
		this.patient_fname = patient_fname;
	}

	public String getPatient_lname() {
		return patient_lname;
	}

	public void setPatient_lname(String patient_lname) {
		this.patient_lname = patient_lname;
	}

	public String getAadharnumber() {
		return Aadharnumber;
	}

	public void setAadharnumber(String aadharnumber) {
		Aadharnumber = aadharnumber;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getBloodgrp() {
		return bloodgrp;
	}

	public void setBloodgrp(String bloodgrp) {
		this.bloodgrp = bloodgrp;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	public Date getRegistration_date() {
		return registration_date;
	}

	public void setRegistration_date(Date registration_date) {
		this.registration_date = registration_date;
	}

	public Hospital getHospital() {
		return hospital;
	}

	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
