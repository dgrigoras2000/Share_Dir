package cy.ac.ucy.cs.epl425.LMS.model;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

// map Java class with employees table with @Table annotation
@Table("employees")
public class Employee {

  @Id
  private Long id;

  // map attribute with column with @Column annotation
  @Column("firstname")
  private String firstname;

  @Column("lastname")
  private String lastname;

  @Column("department")
  private String department;

  @Column("date_of_birth")
  private Date dateOfBirth;

  @MappedCollection(idColumn = "employee_id")
  private Set<Leave> leaves;

  public Employee() {}

  public Employee(
    String firstname,
    String lastname,
    String department,
    Date dateOfBirth
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.department = department;
    this.dateOfBirth = dateOfBirth;
    leaves = new HashSet<>();
  }

  public Long getId() {
    return id;
  }

  public String getFirstname() {
    return firstname;
  }

  public String getLastname() {
    return lastname;
  }

  public String getDepartment() {
    return department;
  }

  public Date getDateOfBirth() {
    return dateOfBirth;
  }

  public Set<Leave> getLeaves() {
    return leaves;
  }

  // setters
  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }

  public void setLastname(String lastname) {
    this.lastname = lastname;
  }

  public void setDepartment(String department) {
    this.department = department;
  }

  public void setDateOfBirth(Date dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public void setLeaves(Set<Leave> leaves) {
    this.leaves = leaves;
  }

  public void setLeave(Leave leaves) {
    this.leaves.add(leaves);
  }

  @Override
  public String toString() {
    return (
      "Employee [id=" +
      id +
      ", firstname=" +
      firstname +
      ", lastname=" +
      lastname +
      ", department=" +
      department +
      ", dateOfBirth=" +
      dateOfBirth +
      "]"
    );
  }
}
