package cy.ac.ucy.cs.epl425.LMS.controller;

// import cy.ac.ucy.cs.epl425.LMS.model.Employee;
import cy.ac.ucy.cs.epl425.LMS.model.Leave;
// import cy.ac.ucy.cs.epl425.LMS.service.EmployeeService;
import cy.ac.ucy.cs.epl425.LMS.service.LeaveService;
import java.sql.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class LeaveController {

  @Autowired
  LeaveService leaveService;

  // @Autowired
  // Employee employeeService;

  @GetMapping("/leaves")
  public ResponseEntity<List<Leave>> getAllLeaves(
    @RequestParam(required = false) Date startDate,
    @RequestParam(required = false) Date endDate,
    @RequestParam(required = false) Boolean approved
  ) {
    try {
      List<Leave> leaves;

      if (startDate == null && endDate == null && approved == null) leaves =
        leaveService.getAllLeaves(); else if (
        startDate == null && endDate == null && approved != null
      ) leaves = leaveService.getApprovedLeaves(approved); else if (
        startDate != null && endDate == null && approved == null
      ) leaves =
        leaveService.getApprovedLeavesBetweenStartToday(startDate); else if (
        startDate != null && endDate == null && approved != null
      ) leaves =
        leaveService.getLeavesBetweenStartToday(startDate, approved); else if (
        startDate == null && endDate != null && approved == null
      ) leaves = leaveService.getApprovedLeavesUntillEnd(endDate); else if (
        startDate == null && endDate != null && approved != null
      ) leaves = leaveService.getLeavesUntillEnd(endDate, approved); else if (
        startDate != null && endDate != null && approved == null
      ) leaves =
        leaveService.getApprovedLeavesBetweenStartEnd(
          startDate,
          endDate
        ); else leaves =
        leaveService.getLeavesBetweenStartEnd(startDate, endDate, approved);

      if (leaves.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(leaves, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/leaves/{id}")
  public ResponseEntity<Leave> getLeaveById(@PathVariable("id") Long id) {
    Leave leaves = leaveService.getLeaveById(id);

    if (leaves != null) {
      return new ResponseEntity<>(leaves, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping(path = "/leaves/employees/{eid}", produces = "application/json;charset=UTF-8")
  public ResponseEntity<Leave> createLeave(
    @PathVariable("eid") Long employeeId,
    @RequestBody Leave leave
  ) {
    try {
      System.out.println(leave);

      Leave _leave = leaveService.saveLeave(
        new Leave(
          employeeId,
          leave.getDescription(),
          leave.getStartDate(),
          leave.getEndDate(),
          leave.getApproved()
        )
      );
      return new ResponseEntity<>(_leave, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/leaves/{id}")
  public ResponseEntity<Leave> updateLeave(
    @PathVariable("id") Long id,
    @RequestBody Leave leave
  ) {
    Leave _leave = leaveService.getLeaveById(id);

    if (_leave != null) {
      _leave.setDescription(leave.getDescription());
      _leave.setStartDate(leave.getStartDate());
      _leave.setEndDate(leave.getEndDate());
      _leave.setApproved(leave.getApproved());
      return new ResponseEntity<>(
        leaveService.saveLeave(_leave),
        HttpStatus.OK
      );
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/leaves")
  public ResponseEntity<HttpStatus> deleteAllLeaves() {
    try {
      leaveService.deleteAllLeaves();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/leaves/{id}")
  public ResponseEntity<HttpStatus> deleteLeave(@PathVariable("id") Long id) {
    try {
      leaveService.deleteLeaveById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
