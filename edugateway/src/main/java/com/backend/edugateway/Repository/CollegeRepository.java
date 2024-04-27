package com.backend.edugateway.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.backend.edugateway.Entity.CollegeEntity;

public interface CollegeRepository extends JpaRepository<CollegeEntity, Long> {

    @Query("SELECT c FROM CollegeEntity c WHERE c.collegeName LIKE %:keyword%")
    List<CollegeEntity> findByContainingCollegeName(@Param("keyword") String keyword);
}
