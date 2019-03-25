package com.soa2019.group4.refix.company.repository;

import com.soa2019.group4.refix.company.model.Company;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import org.springframework.test.context.junit4.SpringRunner;
import java.util.Optional;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CompanyRepositoryTest {

    @Autowired
    private CompanyRepository companyRepository;

    @Test
    public void success_find_by_company_id() {
        // Initial data in database
        Company WhiteCompany = new Company(001L, "white", "Great Company");
        companyRepository.save(WhiteCompany);


        // Find by name
        Optional<Company> someCompany = companyRepository.findByCompanyName("white");

        //Assert
        assertEquals("001L", someCompany.get().getId());
        assertEquals("white", someCompany.get().getName());
        assertEquals("Great Company", someCompany.get().getDetail());
    }
}
