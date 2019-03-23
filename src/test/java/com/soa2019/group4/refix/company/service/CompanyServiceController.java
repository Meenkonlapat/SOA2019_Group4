package com.soa2019.group4.refix.company.service;

import com.soa2019.group4.refix.company.model.Company;
import com.soa2019.group4.refix.company.repository.CompanyRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class CompanyServiceController {

    @Mock
    CompanyRepository companyRepository;

    @Test
    public void formatData() {
    }
}
