package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="donorrequest")

public class DonorRequest {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int request_id;
	@Column
	String donor_name;
	@Column
	String bloodgroup;
	@Column
	String contact_number;
	@Column
	String status;
	@Column
	int bloodbank_id;
	@Column
	int donor_id;
	public DonorRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public DonorRequest(String donor_name, String bloodgroup, String contact_number, String status, int bloodbank_id,
			int donor_id) {
		super();
		this.donor_name = donor_name;
		this.bloodgroup = bloodgroup;
		this.contact_number = contact_number;
		this.status = status;
		this.bloodbank_id = bloodbank_id;
		this.donor_id = donor_id;
	}
	
	public int getRequest_id() {
		return request_id;
	}
	public void setRequest_id(int request_id) {
		this.request_id = request_id;
	}
	public String getDonor_name() {
		return donor_name;
	}
	public void setDonor_name(String donor_name) {
		this.donor_name = donor_name;
	}
	public String getBloodgroup() {
		return bloodgroup;
	}
	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}
	public String getContact_number() {
		return contact_number;
	}
	public void setContact_number(String contact_number) {
		this.contact_number = contact_number;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getBloodbank_id() {
		return bloodbank_id;
	}
	public void setBloodbank_id(int bloodbank_id) {
		this.bloodbank_id = bloodbank_id;
	}
	public int getDonor_id() {
		return donor_id;
	}
	public void setDonor_id(int donor_id) {
		this.donor_id = donor_id;
	}
	
}
