package com.mibess.cartolabackend.api.service;

import com.mibess.cartolabackend.api.converter.EquipeConverter;
import com.mibess.cartolabackend.api.dto.EquipeResponse;
import com.mibess.cartolabackend.api.entity.EquipeEntity;
import com.mibess.cartolabackend.api.repository.EquipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EquipeService {
    private final EquipeRepository equipeRepository;

    public List<EquipeResponse> getEquipes() {
        List<EquipeEntity> equipes = equipeRepository.findAll();
        return equipes.stream().map(EquipeConverter::toResponse).toList();
    }
}
