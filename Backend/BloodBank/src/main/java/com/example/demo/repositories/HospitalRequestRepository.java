package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.HospitalRequest;
@Transactional
@Repository
public interface HospitalRequestRepository extends JpaRepository<HospitalRequest, Integer> {

	@Query("select d from HospitalRequest d where Hospital_request_id=?1")
	public List<HospitalRequest> getAllById(int id);
	
	@Query("select d from HospitalRequest d where hospital_id=?1 and request_status=?2")
	public List<HospitalRequest> getAllByIdStatus(int id, String str);
	
	@Modifying
	@Query("update HospitalRequest set request_status =:request_status where hospital_request_id=:hospital_request_id")
	public int updateStatus(int hospital_request_id ,String request_status);
}
