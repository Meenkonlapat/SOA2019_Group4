package com.soa2019.group4.refix.company.controller;

import com.soa2019.group4.refix.company.model.Company;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CompanyControllerTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void company(){
        Company company = restTemplate.getForObject("/companies/test", Company.class);
        assertEquals();
    }
}
