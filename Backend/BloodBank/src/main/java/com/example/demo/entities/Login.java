package com.example.demo.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="logintable")
public class Login {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int user_id;
	@Column(unique=true)
	String user_name;
	@Column
	String password;
	@Column
	String member_type;
	
	public Login() {
		super();
	}
	public Login( String user_name, String password, String member_type, BloodBank bloodbank) {
		super();
		this.user_name = user_name;
		this.password = password;
		this.member_type = member_type;
	}
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMember_type() {
		return member_type;
	}
	public void setMember_type(String member_type) {
		this.member_type = member_type;
	}
	
	
	@Override
	public String toString() {
		return "Login [user_id=" + user_id + ", user_name=" + user_name + ", password=" + password + ", member_type="
				+ member_type + "]";
	}


}
