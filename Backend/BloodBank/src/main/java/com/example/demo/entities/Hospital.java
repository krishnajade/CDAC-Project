package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="hospital")
public class Hospital {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int hospital_id;
	@Column
	String hospital_name;
	@Column
	String licence_no;
	@Column
	String address;
	@Column
	String city;
	@Column
	String contact_number;
	@Column
	String website;
	@Column
	String email;
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	Login login;
	public Hospital() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Hospital(String hospital_name, String licence_no, String address, String city, String contact_number,
			String website, String email) {
		super();
		this.hospital_name = hospital_name;
		this.licence_no = licence_no;
		this.address = address;
		this.city = city;
		this.contact_number = contact_number;
		this.website = website;
		this.email = email;
	}
	public int getHospital_id() {
		return hospital_id;
	}
	public void setHospital_id(int hospital_id) {
		this.hospital_id = hospital_id;
	}
	public String getHospital_name() {
		return hospital_name;
	}
	public void setHospital_name(String hospital_name) {
		this.hospital_name = hospital_name;
	}
	public String getLicence_no() {
		return licence_no;
	}
	public void setLicence_no(String licence_no) {
		this.licence_no = licence_no;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getContact_number() {
		return contact_number;
	}
	public void setContact_number(String contact_number) {
		this.contact_number = contact_number;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	
}
