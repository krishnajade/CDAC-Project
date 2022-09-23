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
@Table(name="donor")
public class Donor {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int donor_id;
	@Column
	private String donor_name;
	@Column
	private String blood_group;
	@Column
	private int aadharno;	
	@Column
	private String address;
	@Column
	private String city;
	@Column
	private String contact_number;
	@Column
	private String gender;
    @Column
	private int age;
	@Column
	private String email;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")	
	Login login;
	
	public Donor() {
		super();
	}

	public Donor(int donor_id, String donor_name, String blood_group, int aadharno, String address, String city,
			String contact_number, String gender, int age, String email) {
		super();
		this.donor_id = donor_id;
		this.donor_name = donor_name;
		this.blood_group = blood_group;
		this.aadharno = aadharno;
		this.address = address;
		this.city = city;
		this.contact_number = contact_number;
		this.gender = gender;
		this.age = age;
		this.email = email;
	}

	public Donor(int donor_id, String donor_name, String blood_group, int aadharno, String address, String city,
			String contact_number, String gender, int age, String email, Login login) {
		super();
		this.donor_id = donor_id;
		this.donor_name = donor_name;
		this.blood_group = blood_group;
		this.aadharno = aadharno;
		this.address = address;
		this.city = city;
		this.contact_number = contact_number;
		this.gender = gender;
		this.age = age;
		this.email = email;
		this.login = login;
	}

	public int getDonor_id() {
		return donor_id;
	}

	public void setDonor_id(int donor_id) {
		this.donor_id = donor_id;
	}

	public String getDonor_name() {
		return donor_name;
	}

	public void setDonor_name(String donor_name) {
		this.donor_name = donor_name;
	}

	public String getBlood_group() {
		return blood_group;
	}

	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}

	public int getAadharno() {
		return aadharno;
	}

	public void setAadharno(int aadharno) {
		this.aadharno = aadharno;
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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
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

	@Override
	public String toString() {
		return "Donor [donor_id=" + donor_id + ", donor_name=" + donor_name + ", blood_group=" + blood_group
				+ ", aadharno=" + aadharno + ", address=" + address + ", city=" + city + ", contact_number="
				+ contact_number + ", gender=" + gender + ", age=" + age + ", email=" + email + ", login=" + login
				+ "]";
	}
	
	

}
