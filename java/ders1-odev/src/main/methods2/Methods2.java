public class Methods2{
  public static void main(String[] args){

    String mesaj = "bugün hava çok güzel.";
    String yeniMesaj = sehirVer();
    System.out.println(yeniMesaj);

    int sayi = topla(5,7);
    System.out.println(sayi);

    int toplam = topla(1,2,34,56,12);
  }

  public static void ekle(){
   System.out.println("eklendi");
  }
  public static void sil(){
     System.out.println("silindi");

  }
  public static void guncelle(){
     System.out.println("güncellendi");

  }
  
  public static int topla(int sayi1, int sayi2){
    return sayi1 + sayi2;
  }

  public static int topla(int... sayilar){
    int toplam = 0;
    for(int sayi:sayilar){
      toplam += sayi;
    }
    return toplam;
  }

  public static String sehirVer(){
    return "Ankara";
  }
}