package com.soa2019.group4.refix.company.service;

import com.soa2019.group4.refix.company.model.Company;
import com.soa2019.group4.refix.company.repository.CompanyRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class CompanyServiceController {

    @Mock
    CompanyRepository companyRepository;

    @Test
    public void formatData() {
        //Stub
        Company stubCompany = new Company(001L, "name", "detal");
        when(companyRepository.findByCompanyName("white")).thenReturn(Optional.of(stubCompany));

        CompanyService service = new CompanyService(companyRepository);
        assertEquals("white", service.formatData("name"));
    }
}
