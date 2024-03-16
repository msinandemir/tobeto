package org.example.models;

public class AdvertImage {
    public AdvertImage(Long id, Long userId, Long imageId) {
        this.id = id;
        this.userId = userId;
        this.imageId = imageId;
    }

    public AdvertImage() {
    }

    private Long id;
    private Long userId;

    private Long imageId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getImageId() {
        return imageId;
    }

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }
}
