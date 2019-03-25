package com.soa2019.group4.refix.company.service;

import com.soa2019.group4.refix.company.model.Company;
import com.soa2019.group4.refix.company.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.EmptyStackException;
import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    private CompanyRepository companyRepo;

    @Autowired

    public CompanyService(CompanyRepository companyRepo) {
        this.companyRepo = companyRepo;
    }

    // get All companies
    public List<Company> getAllCompanies(){
        return (List<Company>) companyRepo.findAll();
    }

    //get a company

    public Optional<Company> getCompany(Long id){
        return companyRepo.findById(id);
    }

    //add company

    public Company addCompany(Company newCompany){
        newCompany.setId(null);
        return companyRepo.save(newCompany);
    }

    //edit company
    public Optional<Company> editCompany(Long id, Company company){
        Optional<Company> companyOptional = companyRepo.findById(id);
        if(!companyOptional.isPresent())
        {
            return companyOptional;
        }
        company.setId(id);
        return Optional.of(companyRepo.save(company));
    }

    public boolean deleteCompany(Long id){
        try {
            companyRepo.deleteById(id);
            return true;
        } catch (EmptyStackException e){
            return false;
        }
    }

    public String formatData(String name) {
        Optional<Company> someCompany = companyRepo.findByCompanyName(name);
        return "Hello" + someCompany.get().getName();
    }
}
