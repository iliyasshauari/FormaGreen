package com.projectR.projectR.model;

import javax.persistence.*;
import java.io.Serializable;


@Entity
public class GreenArea implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String type, repName;
    private String adress;
    private String areaCode;
    private Double lat;
    private Double lng;



    public GreenArea() {

    }

    public GreenArea(String type, String repName, String adress, Double lat, Double lng){
        this.type = type;
        this.adress = adress;
        this.repName = repName;
        this.lat = lat;
        this.lng = lng;
    }


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }



    public String getType(){
        return type;
    }
    public void setType(String type){
        this.type = type;
    }

    public String getRepName(){
        return repName;
    }
    public  void setRepName(){
        this.repName = repName;
    }

    public String getAreaCode() {
        return areaCode;
    }

    public void setAreaCode(String areaCode) {
        this.areaCode = areaCode;
    }

    public String toString() {
        return "GreenArea{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", repName='" + repName + '\'' +
                ", areaCode='" + areaCode + '\'' +
                ", adress='" + adress + '\'' +
                '}';
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }
}
