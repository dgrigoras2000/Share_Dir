package cy.ac.ucy.cs.epl425.LMS.repository;

import cy.ac.ucy.cs.epl425.LMS.model.Employee;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// We can use CrudRepository’s methods: save(), findOne(), findById(),
// findAll(), count(), delete(), deleteById() without implementing these methods.
@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
  List<Employee> findByDepartmentContaining(String val);
}
