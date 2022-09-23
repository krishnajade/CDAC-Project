package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.BloodStock;
import com.example.demo.entities.DonorRequest;
@Transactional
@Repository
public interface DonorRequestRepository extends JpaRepository<DonorRequest, Integer> {

	
	@Query("select d from DonorRequest d where bloodbank_id=?1")
	public List<DonorRequest> getAllById(int id);
	
	@Query("select d from DonorRequest d where bloodbank_id=?1 and status=?2")
	public List<DonorRequest> getAllByIdStatus(int id, String str);
	
	@Modifying
	@Query("update DonorRequest set status =?2 where request_id =?1")
	public int updateStatus(int id ,String st);

	@Query("select d from DonorRequest d where donor_id=?1")
	public List<DonorRequest> getRequestById(int id);
	
}
