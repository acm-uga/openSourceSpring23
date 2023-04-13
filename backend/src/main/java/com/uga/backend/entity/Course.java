package com.uga.backend.entity;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.cloud.firestore.annotation.DocumentId;
import com.google.cloud.spring.data.firestore.Document;

@Document(collectionName = "courses")
public class Course {
    @DocumentId
    private String title;
    private String subject;
    private int courseNumber;
    private String instructor;
    private int crn;
    private String location;
    private ArrayList<Boolean> days;
    private String timeStart;
    private String timeEnd;

    public Course() {
        //default constructor for deserialization
    }

    @JsonCreator
    public Course(@JsonProperty("title") String title,
                    @JsonProperty("subject") String subject,
                    @JsonProperty("courseNumber") int courseNumber,
                    @JsonProperty("instructor") String instructor,
                    @JsonProperty("crn") int crn,
                    @JsonProperty("location") String location,
                    @JsonProperty("days") ArrayList<Boolean> days,
                    @JsonProperty("timeStart") String timeStart,
                    @JsonProperty("timeEnd") String timeEnd) {
        super();
        this.title = title;
        this.subject = subject;
        this.courseNumber = courseNumber;
        this.instructor = instructor;
        this.crn = crn;
        this.location = location;
        this.days = days;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public int getCourseNumber() {
        return courseNumber;
    }

    public void setCourseNumber(int courseNumber) {
        this.courseNumber = courseNumber;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public int getCrn() {
        return crn;
    }

    public void setCrn(int crn) {
        this.crn = crn;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public ArrayList<Boolean> getDays() {
        return days;
    }

    public void setDays(ArrayList<Boolean> days) {
        this.days = days;
    }

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public String getTimeEnd() {
        return timeEnd;
    }

    public void setTimeEnd(String timeEnd) {
        this.timeEnd = timeEnd;
    }
}