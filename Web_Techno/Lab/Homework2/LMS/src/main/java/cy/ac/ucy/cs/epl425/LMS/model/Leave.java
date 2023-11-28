package cy.ac.ucy.cs.epl425.LMS.model;

import java.sql.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

// map Java class with employees table with @Table annotation
@Table("leaves")
public class Leave {

  @Id
  private Long id;

  // map attribute with column with @Column annotation
  @Column("employee_id")
  private Long employeeId;

  @Column("description")
  private String description;

  @Column("start_date")
  private Date startDate;

  @Column("end_date")
  private Date endDate;

  @Column("approved")
  private Boolean approved;

  public Leave() {}

  public Leave(
    Long employeeId,
    String description,
    Date startDate,
    Date endDate,
    Boolean approved
  ) {
    this.employeeId = employeeId;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.approved = approved;
  }

  public Long getId() {
    return id;
  }

  public Long getEmployeeId() {
    return employeeId;
  }

  public String getDescription() {
    return description;
  }

  public Date getStartDate() {
    return startDate;
  }

  public Date getEndDate() {
    return endDate;
  }

  public Boolean getApproved() {
    return approved;
  }

  // setters
  public void setEmployeeId(Long employeeId) {
    this.employeeId = employeeId;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  public void setEndDate(Date endDate) {
    this.endDate = endDate;
  }

  public void setApproved(Boolean approved) {
    this.approved = approved;
  }

  public String toString() {
    return (
      "Employee [id=" +
      id +
      ", employeeId=" +
      employeeId +
      ", description=" +
      description +
      ", startDate=" +
      startDate +
      ", endDate=" +
      endDate +
      ", approved=" +
      approved +
      "]"
    );
  }
}
