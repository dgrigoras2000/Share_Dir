package cy.ac.ucy.cs.epl425.LMS.repository;

import cy.ac.ucy.cs.epl425.LMS.model.Leave;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LeaveRepository extends CrudRepository<Leave, Long> {
  List<Leave> findByApproved(Boolean approved);

  List<Leave> findByStartDateBetweenAndApproved(
    Date startDate,
    LocalDate currentDate,
    Boolean approved
  );

  List<Leave> findByEndDateLessThanEqualAndApproved(
    Date endDate,
    boolean approved
  );

  List<Leave> findByStartDateGreaterThanEqualAndEndDateLessThanEqualAndApproved(
    Date startDate,
    Date endDate,
    Boolean approved
  );
}
