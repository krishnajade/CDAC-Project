package com.example.demo.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="bloodbank")
public class BloodBank {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int bloodBank_id;
	@Column
	String bloodbank_name;
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
	/*@JsonIgnoreProperties("bloodbank")
	@OneToMany(mappedBy = "bloodbank" , cascade = CascadeType.MERGE , orphanRemoval=true)
	Set<BloodStock> bloodstock ;*/
	

	public BloodBank() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public BloodBank(String bloodbank_name, String licence_no, String address,String city, String contact_number,
			String website, String email) {
		super();
		this.bloodbank_name = bloodbank_name;
		this.licence_no = licence_no;
		this.address = address;
		this.city=city;
		this.contact_number = contact_number;
		this.website = website;
		this.email = email;
	}



	/*public BloodBank(int bloodBank_id, String bloodbank_name, String licence_no, String address, String contact_number,
			String website, String email, String username,String password,String member_type ) {
		super();
		this.bloodBank_id = bloodBank_id;
		this.bloodbank_name = bloodbank_name;
		this.licence_no = licence_no;
		this.address = address;
		this.contact_number = contact_number;
		this.website = website;
		this.email = email;
		this.login = new Login(username,password,member_type);
	}*/
	public int getBloodBank_id() {
		return bloodBank_id;
	}
	public void setBloodBank_id(int bloodBank_id) {
		this.bloodBank_id = bloodBank_id;
	}
	public String getBloodbank_name() {
		return bloodbank_name;
	}
	public void setBloodbank_name(String bloodbank_name) {
		this.bloodbank_name = bloodbank_name;
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
	
	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}

	public void setLogin(Login login) {
		this.login = login;
	}
	/*public Set<BloodStock> getBloodstock() {
		return bloodstock;
	}

	public void setBloodstock(Set<BloodStock> bloodstock) {
		this.bloodstock = bloodstock;
	}*/
	@Override
	public String toString() {
		return "BloodBank [bloodBank_id=" + bloodBank_id + ", bloodbank_name=" + bloodbank_name + ", licence_no="
				+ licence_no + ", address=" + address + ", contact_number=" + contact_number + ", website=" + website
				+ ", email=" + email + ", login=" + login + "]";
	}
	
	
	

}
