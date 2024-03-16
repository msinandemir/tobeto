package org.example.models;

public class Adress {
    public Adress(Long id, String adress, Long countryId, Long cityId, String postalCode) {
        this.id = id;
        this.adress = adress;
        this.countryId = countryId;
        this.cityId = cityId;
        this.postalCode = postalCode;
    }

    public Adress() {
    }

    private Long id;
    private String adress;
    private Long countryId;
    private Long cityId;
    private String postalCode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public Long getCountryId() {
        return countryId;
    }

    public void setCountryId(Long countryId) {
        this.countryId = countryId;
    }

    public Long getCityId() {
        return cityId;
    }

    public void setCityId(Long cityId) {
        this.cityId = cityId;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }
}
