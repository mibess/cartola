package com.mibess.cartolabackend.api.converter;

import com.mibess.cartolabackend.api.dto.EquipeResponse;
import com.mibess.cartolabackend.api.entity.EquipeEntity;

public class EquipeConverter {

    private EquipeConverter() {}

    public static EquipeResponse toResponse(EquipeEntity entity) {
        return new EquipeResponse(
                entity.getId(),
                entity.getNome(),
                entity.getEscudo());
    }

}
