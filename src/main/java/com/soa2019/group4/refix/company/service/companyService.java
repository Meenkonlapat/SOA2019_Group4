package com.soa2019.group4.refix.company.service;

import com.soa2019.group4.refix.company.model.Company;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class companyService {

    private List<Company> companies = new ArrayList<>(Arrays.asList(
            new Company("001", "White Company", "Support Fire"),
            new Company("002", "Black Company", "Support Water"),
            new Company("003", "Green Company", "Support Electric")
    ));

    public List<Company> getAllCompanies(){
        return companies;
    }
    public Company getCompany(String id){
        return companies.stream().filter(c -> c.getId().equals(id)).findFirst().get();
    }

    public void addCompany(Company company){
        companies.add(company);
    }
    public void deleteCompany(String id){
        companies.removeIf(company -> company.getId().equals(id));
    }
}
