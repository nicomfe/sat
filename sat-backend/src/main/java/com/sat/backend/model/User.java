package com.sat.backend.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class User {

  String name;
  String lastname;
  String emailAddress;

  public User() {

  }

  public User(String name, String password, String userId) {
    this.name = name;
    this.lastname = password;
    this.emailAddress = userId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getPassword() {
    return lastname;
  }

  public void setPassword(String password) {
    this.lastname = password;
  }

  public String getEmailAddress() {
    return emailAddress;
  }

  public void setEmailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
  }

  @Override
  public String toString() {
    return "User [name=" + name + ", lastname=" + lastname + ", userId="
        + emailAddress + "]";
  }

}
