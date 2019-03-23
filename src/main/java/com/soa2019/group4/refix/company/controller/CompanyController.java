package com.soa2019.group4.refix.company.controller;

import com.soa2019.group4.refix.company.model.Company;
import com.soa2019.group4.refix.company.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    //get all companies

    @GetMapping("/companies")
    public List<Company> getAllCompanies(){
        return companyService.getAllCompanies();
    }

    //get a company

    @GetMapping("/companies/{id}")
    public ResponseEntity<?> getCompany(@PathVariable Long id){
        Optional<Company> company = companyService.getCompany(id);
        if(!company.isPresent()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(company);
    }
    //add company
    @PostMapping("/companies")
    public ResponseEntity<?> addCompany(@Valid @RequestBody Company newCompany) {
        Company company = (Company) companyService.addCompany(newCompany);
        return ResponseEntity.status(HttpStatus.CREATED).body(company);
    }

    //edit company
    public ResponseEntity<?> editCompany(@PathVariable Long id, @Valid @RequestBody Company current_company){
        Optional<Company> company = companyService.editCompany(id, current_company);
        if (!company.isPresent()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(company);
    }

    @PutMapping("/companies/{id}")
    //delete company
    @DeleteMapping(value = "/companies/{id}")
    public void deleteCompany(@PathVariable Long id){
        companyService.deleteCompany(id);
    }
}
