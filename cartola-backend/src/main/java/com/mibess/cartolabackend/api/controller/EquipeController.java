package com.mibess.cartolabackend.api.controller;

import com.mibess.cartolabackend.api.dto.EquipeResponse;
import com.mibess.cartolabackend.api.service.EquipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/equipes")
public class EquipeController {

    private final EquipeService equipeService;

    @GetMapping
    public List<EquipeResponse> getEquipes() {
        return equipeService.getEquipes();
    }

}
