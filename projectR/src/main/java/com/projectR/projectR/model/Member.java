package com.projectR.projectR.model;
import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
public class Member implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Double donation;
    private String name, email, password, phone;
    private LocalDate subscription;
    private byte[] codeQr;

    public Member() {
    }

    public Member(String name, String email,String password, LocalDate subscription, byte[] codeQr, String phone, Double donation) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.subscription = subscription;
        this.donation = donation;
        this.phone = phone;
        this.codeQr = codeQr;

    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getSubscription() {
        return subscription;
    }
    public void setSubscription(LocalDate subscription) {
        this.subscription = subscription;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public byte[] getCodeQr() {

        return codeQr;
    }
    public void setCodeQr(byte[] codeQr) {

        this.codeQr = codeQr;
    }

    public String toString() {
        return "Member{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", subscription='" + subscription + '\'' +
                ", codeQr='" + codeQr + '\'' +
                '}';
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Double getDonation() {
        return donation;
    }

    public void setDonation(Double donation) {
        this.donation = donation;
    }
}


