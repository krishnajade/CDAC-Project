package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="HospitalRequest")
public class HospitalRequest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int hospital_request_id;
	@Column
	int hospital_id;
	@Column
	String  hospital_name;
	@Column
	String hospital_phone_number;
	@Column
	int blood_bank_id;
	@Column
	String  blood_component;
	@Column
	String request_status;
	@Column
	int quantity;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(nullable = false )
	Date request_date ;
	
	@JsonIgnoreProperties("HospitalRequest")
	@OneToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="patient_id")
	Patient patient;

	public HospitalRequest() {
		super();
	}

	public HospitalRequest(int hospital_request_id, int hospital_id, String hospital_name, String hospital_phone_number,
			int blood_bank_id, String blood_component, String request_status, int quantity, Date request_date) {
		super();
		this.hospital_request_id = hospital_request_id;
		this.hospital_id = hospital_id;
		this.hospital_name = hospital_name;
		this.hospital_phone_number = hospital_phone_number;
		this.blood_bank_id = blood_bank_id;
		this.blood_component = blood_component;
		this.request_status = request_status;
		this.quantity = quantity;
		this.request_date = request_date;
	}

	public int getHospital_request_id() {
		return hospital_request_id;
	}

	public void setHospital_request_id(int hospital_request_id) {
		this.hospital_request_id = hospital_request_id;
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

	public String getHospital_phone_number() {
		return hospital_phone_number;
	}

	public void setHospital_phone_number(String hospital_phone_number) {
		this.hospital_phone_number = hospital_phone_number;
	}

	public int getBlood_bank_id() {
		return blood_bank_id;
	}

	public void setBlood_bank_id(int blood_bank_id) {
		this.blood_bank_id = blood_bank_id;
	}

	public String getBlood_component() {
		return blood_component;
	}

	public void setBlood_component(String blood_component) {
		this.blood_component = blood_component;
	}

	public String getRequest_status() {
		return request_status;
	}

	public void setRequest_status(String request_status) {
		this.request_status = request_status;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Date getRequest_date() {
		return request_date;
	}

	public void setRequest_date(Date request_date) {
		this.request_date = request_date;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}	
}
