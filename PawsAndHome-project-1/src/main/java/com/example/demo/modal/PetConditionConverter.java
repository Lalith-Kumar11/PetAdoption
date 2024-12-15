package com.example.demo.modal;

import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class PetConditionConverter implements AttributeConverter<Set<PetCondition>,String>{
	
	@Override
	public String convertToDatabaseColumn(Set<PetCondition> attribute) {
        if (attribute == null || attribute.isEmpty()) {
            return "";
        }
        return attribute.stream()
                .map(Enum::name)
                .collect(Collectors.joining(","));
    }
	
	@Override
    public Set<PetCondition> convertToEntityAttribute(String dbData) {
        if (dbData == null || dbData.isEmpty()) {
            return Set.of();
        }
        return Arrays.stream(dbData.split(","))
                .map(PetCondition::valueOf)
                .collect(Collectors.toSet());
    }


}
