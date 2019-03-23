package com.soa2019.group4.refix.company.repository;


import com.soa2019.group4.refix.company.model.Company;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
public interface CompanyRepository extends CrudRepository<Company, Long> {

    Optional<Company> findByCompanyId(Long id);
}
