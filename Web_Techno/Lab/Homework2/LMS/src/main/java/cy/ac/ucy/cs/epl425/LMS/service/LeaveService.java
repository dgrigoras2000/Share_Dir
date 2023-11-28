package cy.ac.ucy.cs.epl425.LMS.service;

import cy.ac.ucy.cs.epl425.LMS.model.Leave;
import cy.ac.ucy.cs.epl425.LMS.repository.LeaveRepository;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LeaveService {

  @Autowired
  LeaveRepository leaveRepository;

  public List<Leave> getAllLeaves() {
    List<Leave> leaves = new ArrayList<Leave>();
    this.leaveRepository.findAll().forEach(leaves::add);
    return leaves;
  }

  public List<Leave> getApprovedLeaves(Boolean approved) {
    List<Leave> leaves = new ArrayList<Leave>();
    this.leaveRepository.findByApproved(approved).forEach(leaves::add);
    return leaves;
  }

  public List<Leave> getApprovedLeavesBetweenStartToday(Date startDate) {
    List<Leave> leaves = new ArrayList<Leave>();
    LocalDate currentDate = LocalDate.now();
    this.leaveRepository.findByStartDateBetweenAndApproved(
        startDate,
        currentDate,
        true
      )
      .forEach(leaves::add);
    return leaves;
  }

  public List<Leave> getLeavesBetweenStartToday(
    Date startDate,
    Boolean approved
  ) {
    List<Leave> leaves = new ArrayList<Leave>();
    LocalDate currentDate = LocalDate.now();
    this.leaveRepository.findByStartDateBetweenAndApproved(
        startDate,
        currentDate,
        approved
      )
      .forEach(leaves::add);
    return leaves;
  }

  public List<Leave> getApprovedLeavesUntillEnd(Date endDate) {
    List<Leave> leaves = new ArrayList<Leave>();
    this.leaveRepository.findByEndDateLessThanEqualAndApproved(endDate, true)
      .forEach(leaves::add);
    return leaves;
  }

  public List<Leave> getLeavesUntillEnd(Date endDate, Boolean approved) {
    List<Leave> leaves = new ArrayList<Leave>();
    this.leaveRepository.findByEndDateLessThanEqualAndApproved(
        endDate,
        approved
      )
      .forEach(leaves::add);
    return leaves;
  }

  public List<Leave> getApprovedLeavesBetweenStartEnd(
    Date startDate,
    Date endDate
  ) {
    List<Leave> leaves = new ArrayList<Leave>();
    this.leaveRepository.findByStartDateGreaterThanEqualAndEndDateLessThanEqualAndApproved(
        startDate,
        endDate,
        true
      )
      .forEach(leaves::add);
    return leaves;
  }

  public List<Leave> getLeavesBetweenStartEnd(
    Date startDate,
    Date endDate,
    Boolean approved
  ) {
    List<Leave> leaves = new ArrayList<Leave>();
    this.leaveRepository.findByStartDateGreaterThanEqualAndEndDateLessThanEqualAndApproved(
        startDate,
        endDate,
        approved
      )
      .forEach(leaves::add);
    return leaves;
  }

  public Leave getLeaveById(Long id) {
    return this.leaveRepository.findById(id).get();
  }

  public Leave saveLeave(Leave leave) {
    return this.leaveRepository.save(leave);
  }

  public void deleteAllLeaves() {
    this.leaveRepository.deleteAll();
  }

  public void deleteLeaveById(Long id) {
    this.leaveRepository.deleteById(id);
  }
}
