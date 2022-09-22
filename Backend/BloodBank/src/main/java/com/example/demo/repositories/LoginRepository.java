package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Transactional
@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	@Query("select l.member_type,l.user_id from Login l where user_name = ?1 and password = ?2" )
	public List<Object[]> checkLog(String uid,String pwd);

}
