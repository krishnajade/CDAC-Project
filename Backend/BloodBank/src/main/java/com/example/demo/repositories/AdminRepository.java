package com.example.demo.repositories;


import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Admin;


@Transactional
@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

	@Query("select b from Admin b where user_id =?1")
	public Admin findByUserId(int id);

}
