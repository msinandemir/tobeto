package org.example.d9.abstractclasses;

public abstract class GameCalculator {
    public abstract void hesapla();

    public final void gameOver(){
        System.out.println("Oyun bitti.");
    }
}
