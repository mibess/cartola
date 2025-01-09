package com.mibess.cartolabackend.api.repository;

import com.mibess.cartolabackend.api.entity.EquipeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipeRepository extends JpaRepository<EquipeEntity, Long> {
}
