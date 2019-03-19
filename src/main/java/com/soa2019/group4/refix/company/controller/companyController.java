package com.soa2019.group4.refix.company.controller;

import com.soa2019.group4.refix.company.model.Company;
import com.soa2019.group4.refix.company.service.companyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class companyController {

    @Autowired
    private companyService companyService;

    //get all companies

    @GetMapping("/companies")
    public List<Company> getAllCompanies(){
        return companyService.getAllCompanies();
    }

    //get only one company

    @GetMapping("/company/{id}")
    public Company getCompany(@PathVariable String id){
        return companyService.getCompany(id);
    }
    //create company
//    @PostMapping("/company")

    //delete company
    @DeleteMapping(value = "/{id}")
    public void deleteCompany(@PathVariable String id){
        companyService.deleteCompany(id);
    }
}
