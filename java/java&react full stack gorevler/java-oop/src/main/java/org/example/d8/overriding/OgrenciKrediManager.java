package org.example.d8.overriding;

public class OgrenciKrediManager extends BaseKrediManager {
    @Override
    public double hesapla(double tutar) {
        return tutar * 1.10;
    }
}
