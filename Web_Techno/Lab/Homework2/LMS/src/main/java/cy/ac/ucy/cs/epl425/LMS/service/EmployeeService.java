package cy.ac.ucy.cs.epl425.LMS.service;

import cy.ac.ucy.cs.epl425.LMS.model.Employee;
import cy.ac.ucy.cs.epl425.LMS.repository.EmployeeRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

  @Autowired
  EmployeeRepository employeeRepository;

  public List<Employee> getAllEmployees() {
    List<Employee> employees = new ArrayList<Employee>();
    this.employeeRepository.findAll().forEach(employees::add);
    return employees;
  }

  public List<Employee> getEmployeesByDepartment(String department) {
    return this.employeeRepository.findByDepartmentContaining(department);
  }

  public Employee getEmployeeById(Long id) {
    return this.employeeRepository.findById(id).get();
  }

  public Employee saveEmployee(Employee employee) {
    return this.employeeRepository.save(employee);
  }

  public void deleteAllEmployees() {
    this.employeeRepository.deleteAll();
  }

  public void deleteEmployeeById(Long id) {
    this.employeeRepository.deleteById(id);
  }
}
