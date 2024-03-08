
const linkler = document.querySelector('.linkler ul');


class Ürün {
    constructor(ürünadı, kategori, fiyat, ürün_hakkında) {
        this.ürünadı = ürünadı;
        this.kategori = kategori;
        this.fiyat = fiyat;
        this.ürün_hakkında = ürün_hakkında
    }
}

var ürünler = [];


//atıştırmalık
ürünler.push(new Ürün("günün-çorbası", ["başlangıç"], 75, "Günün çorbası"));
ürünler.push(new Ürün("patates-cips", ["başlangıç"], 95, "Porsiyon patates cipsi"));
ürünler.push(new Ürün("soğan-halkası", ["başlangıç"], 110, "8 Adet Soğan halkalası ve cips"));
ürünler.push(new Ürün("sebzeli-omlet", ["başlangıç"], 120, "Kapya Biber , Yeşil Biber , Mantar"));
ürünler.push(new Ürün("karışık-omlet", ["başlangıç"], 135, "Kapya Biber , Yeşil Biber , Mantar , Sucuk "));
ürünler.push(new Ürün("peynirli-omlet", ["başlangıç"], 115, "Beyaz Peynir - Kaşar Peynir"));
ürünler.push(new Ürün("sahanda-sucuklu-yumurta", ["başlangıç"], 145, "Sahanda sucuklu yumurta"));
ürünler.push(new Ürün("mozarella-stick", ["başlangıç"], 165, "6 Adet Mozarella stick"));
ürünler.push(new Ürün("çıtır-tavuk", ["başlangıç"], 165, "8 Adet Çıtır Tavuk"));
ürünler.push(new Ürün("menemen", ["başlangıç"], 115, "Soğanlı - Soğansız"));
ürünler.push(new Ürün("kahvaltı-tabağı", ["başlangıç"], 195, "Beyaz Peynir , Kaşar , Sosis , Siyah Zeytin , Yeşil Zeytin , Haşlanmış Yumurta , Söğüş"));
ürünler.push(new Ürün("kombo-tabağı", ["başlangıç"], 255, "5 Adet Soğan Halkası , 4 Adet Mozarella Stick , 4 Adet Sosis , 6 Adet Çıtır Tavuk ve Cips"));
ürünler.push(new Ürün("peynir-tabağı", ["başlangıç"], 225));
ürünler.push(new Ürün("çıtır-karides", ["başlangıç"], 350, "çıtır jumbo karides parçaları"));
ürünler.push(new Ürün("serpme-kahvaltı", ["başlangıç"], 0));


//tostlar
ürünler.push(new Ürün("kaşarlı-tost", ["tost"], 110, "kaşar,cips"));
ürünler.push(new Ürün("sebzeli-tost", ["tost"], 120, "kapya biber,yeşil biber,mantar,kaşar,cips"));
ürünler.push(new Ürün("karışık-tost", ["tost"], 130, "kaşar,sucuk,cips"));
ürünler.push(new Ürün("trio-tost", ["tost"], 170, "3 katlı közlenmiş kapya biber,yeşil biber,mantar,havuç,salam,sucuk,kaşar peyniri,cheddar peyniri,cips"));
ürünler.push(new Ürün("kavurmalı-tost", ["tost"], 190, "dana kavurma,cips"));

//gözlemeler
ürünler.push(new Ürün("kaşarlı-gözleme", ["gözleme"], 115, "kaşar,cips"));
ürünler.push(new Ürün("patatesli-gözleme", ["gözleme"], 115, "patates,cips"));
ürünler.push(new Ürün("karışık-gözleme", ["gözleme"], 125, "patates,kaşar,cips"));

//wrapler
ürünler.push(new Ürün("sebzeli-wrap", ["wrap"], 175));
ürünler.push(new Ürün("tavuk-wrap", ["wrap"], 200));
ürünler.push(new Ürün("et-wrap", ["wrap"], 250));

//burgerler
ürünler.push(new Ürün("tavuk-burger", ["burger"], 190, "150gr tavuk göğüs ızgara,turşu,domates,yeşillik,cips"));
ürünler.push(new Ürün("klasik-burger", ["burger"], 210, "135gr %100 dana eti ,turşu,domates,yeşillik,cips"));
ürünler.push(new Ürün("cheese-burger", ["burger"], 220, "135gr %100 dana eti,cheddar peynir ,turşu,domates,yeşillik,cips"));
ürünler.push(new Ürün("mexican-burger", ["burger"], 230, "135gr %100 dana eti ,mexican sos,turşu,domates,yeşillik,cips"));
ürünler.push(new Ürün("trio-burger", ["burger"], 350, "3*100gr %100 dana eti,cheddar peynir,mantar,karamelize soğan,dana jambon,salatalık turşusu,domates,yeşillik,cips"));

//sandviçler
ürünler.push(new Ürün("soğuk-sandviç", ["sandviç"], 125));
ürünler.push(new Ürün("tonbalıklı-sandviç", ["sandviç"], 180));
ürünler.push(new Ürün("tavuklu-sandviç", ["sandviç"], 170));
ürünler.push(new Ürün("etli-sandviç", ["sandviç"], 250));

//makarnalar
ürünler.push(new Ürün("penne-arabita", ["makarna"], 160));
ürünler.push(new Ürün("etli-noodle", ["makarna"], 230));
ürünler.push(new Ürün("sebzeli-noodle", ["makarna"], 220));
ürünler.push(new Ürün("tavuklu-noodle", ["makarna"], 210));
ürünler.push(new Ürün("spagetti-bolonez", ["makarna"], 250));
ürünler.push(new Ürün("tavuklu-köri-soslu-penne", ["makarna"], 230));
ürünler.push(new Ürün("italyan-köfte-spagetti", ["makarna"], 280));
ürünler.push(new Ürün("tavuklu-taglitelli", ["makarna"], 180));
ürünler.push(new Ürün("etli-taglitelli", ["makarna"], 200));

//salata

ürünler.push(new Ürün("akdeniz-salata", ["salata"], 160));
ürünler.push(new Ürün("çıtır-tavuklu-salata", ["salata"], 200));
ürünler.push(new Ürün("tavuk-sezar-salata", ["salata"], 240));
ürünler.push(new Ürün("ton-balıklı-salata", ["salata"], 200));
ürünler.push(new Ürün("roka-hellim-salata", ["salata"], 230));
ürünler.push(new Ürün("tulum-peynir-salata", ["salata"], 230));
ürünler.push(new Ürün("bonfile-salata", ["salata"], 290));
ürünler.push(new Ürün("avakadolu-salata", ["salata"], 230));

//anayemek
ürünler.push(new Ürün("tavuk-ızgara", ["anayemek"], 220));
ürünler.push(new Ürün("tavuk-stragonof", ["anayemek"], 230));
ürünler.push(new Ürün("tavuk-quesadilla", ["anayemek"], 240));
ürünler.push(new Ürün("soya-soslu-tavuk", ["anayemek"], 220));
ürünler.push(new Ürün("tavuk-schnitzel", ["anayemek"], 230));
ürünler.push(new Ürün("köri-soslu-tavuk", ["anayemek"], 220));
ürünler.push(new Ürün("tavuk-fajita", ["anayemek"], 240));
ürünler.push(new Ürün("tavuk-sote", ["anayemek"], 230));
ürünler.push(new Ürün("barbekü-soslu-tavuk", ["anayemek"], 220));
ürünler.push(new Ürün("köfte", ["anayemek"], 240));
ürünler.push(new Ürün("kaşarlı-köfte", ["anayemek"], 250));
ürünler.push(new Ürün("et-quesadilla", ["anayemek"], 290));
ürünler.push(new Ürün("et-stragonof", ["anayemek"], 280));
ürünler.push(new Ürün("et-fajita", ["anayemek"], 290));
ürünler.push(new Ürün("saç-kavurma", ["anayemek"], 350));
ürünler.push(new Ürün("bonfile", ["anayemek"], 350, "200gr dana bonfile,salata,cips"));
ürünler.push(new Ürün("cafe-d-paris-soslu-bonfile", ["anayemek"], 360, "200gr dana bonfile,cafe d paris sos,salata,cips"));
ürünler.push(new Ürün("mantar-soslu-bonfile", ["anayemek"], 360, "200gr dana bonfile, mantar sosu,salata,cips"));
ürünler.push(new Ürün("pepper-soslu-bonfile", ["anayemek"], 360, "200gr dana bonfile,pepper sos,salata,cips"));
ürünler.push(new Ürün("demi-glace-soslu-bonfile", ["anayemek"], 360, "200gr dana bonfile,demi glace sos,salata,cips"));
ürünler.push(new Ürün("trio-fajita", ["anayemek"], 375, "dana bonfile,tavuk göğüs,karides,salata,cips"));
ürünler.push(new Ürün("Dana-madalyon", ["anayemek"], 400, "6 parça ince dilim dana bonfile,salata,cips "));
ürünler.push(new Ürün("kuzu-pirzola", ["anayemek"], 330, "5 parça kuzu pirzola,salata,cips"));
ürünler.push(new Ürün("karışık-ızgara", ["anayemek"], 750, "4 parça kuzu pirzola,2 çöp et şiş,2 çöp tavuk şiş,4 adet köfte,2 adet ızgara tavuk,cips,salata,pilav"));

//tatlılar
ürünler.push(new Ürün("cheesecake-frambuaz", ["tatlı"], 110));
ürünler.push(new Ürün("cheesecake-limon", ["tatlı"], 110));
ürünler.push(new Ürün("fıstık-rüyası", ["tatlı"], 120));
ürünler.push(new Ürün("devils-pasta", ["tatlı"], 25));
ürünler.push(new Ürün("tiramisu", ["tatlı"], 25));
ürünler.push(new Ürün("sufle", ["tatlı"], 25));
ürünler.push(new Ürün("latte-pasta", ["tatlı"], 25));
ürünler.push(new Ürün("profiterollü-pasta", ["tatlı"], 25));
ürünler.push(new Ürün("top-dondurma", ["tatlı"], 25, "vanilya-çilek-çikoalta"));
ürünler.push(new Ürün("banana-split", ["tatlı"], 25, "3 top dondurma,muz"));
ürünler.push(new Ürün("summer-cup", ["tatlı"], 25, "3 top dondurma,mevsim meyveleri"));


//sıcak içecekler
ürünler.push(new Ürün("çay", ["sıcak-içecekler"], 25));
ürünler.push(new Ürün("duble-çay", ["sıcak-içecekler"], 40));
ürünler.push(new Ürün("süt", ["sıcak-içecekler"], 50));
ürünler.push(new Ürün("ballı-süt", ["sıcak-içecekler"], 60));
ürünler.push(new Ürün("salep", ["sıcak-içecekler"], 90));
ürünler.push(new Ürün("sıcak-çikolata", ["sıcak-içecekler"], 95));

//bitki çayları
ürünler.push(new Ürün("nane-limon-çayı", ["bitki-çayları"], 65));
ürünler.push(new Ürün("melisa-çayı", ["bitki-çayları"], 65));
ürünler.push(new Ürün("kivi-çayı", ["bitki-çayları"], 50));
ürünler.push(new Ürün("ada-çayı", ["bitki-çayları"], 65));
ürünler.push(new Ürün("elma-çayı", ["bitki-çayları"], 70));
ürünler.push(new Ürün("kış-çayı", ["bitki-çayları"], 75));
ürünler.push(new Ürün("karışık-meyve-çayı", ["bitki-çayları"], 75));
ürünler.push(new Ürün("yeşil-çay", ["bitki-çayları"], 65));
ürünler.push(new Ürün("papatya-çayı", ["bitki-çayları"], 65));
ürünler.push(new Ürün("tarçın-çayı", ["bitki-çayları"], 50));
ürünler.push(new Ürün("kuşburnu-çayı", ["bitki-çayları"], 50));
ürünler.push(new Ürün("nar-çayı", ["bitki-çayları"], 65));
ürünler.push(new Ürün("ıhlamur", ["bitki-çayları"], 65));

//kahveler
ürünler.push(new Ürün("nescafe", ["sıcak-kahveler"], 60));
ürünler.push(new Ürün("sütlü-nescafe", ["sıcak-kahveler"], 65));
ürünler.push(new Ürün("espresso", ["sıcak-kahveler"], 55));
ürünler.push(new Ürün("double-espresso", ["sıcak-kahveler"], 60));
ürünler.push(new Ürün("americano", ["sıcak-kahveler"], 75));
ürünler.push(new Ürün("sütlü-americano", ["sıcak-kahveler"], 80));
ürünler.push(new Ürün("latte", ["sıcak-kahveler"], 80));
ürünler.push(new Ürün("karamel-latte", ["sıcak-kahveler"], 85));
ürünler.push(new Ürün("cappuchino", ["sıcak-kahveler"], 85));
ürünler.push(new Ürün("mocha", ["sıcak-kahveler"], 90));
ürünler.push(new Ürün("white-chocolate-mocha", ["sıcak-kahveler"], 95));
ürünler.push(new Ürün("macchiato", ["sıcak-kahveler"], 80));
ürünler.push(new Ürün("karamel-macchiato", ["sıcak-kahveler"], 85));

//türk kahveleri
ürünler.push(new Ürün("türk-kahvesi", ["türk-kahveleri"], 60));
ürünler.push(new Ürün("sütlü-türk-kahvesi", ["türk-kahveleri"], 65));
ürünler.push(new Ürün("menengiç-kahvesi", ["türk-kahveleri"], 70));
ürünler.push(new Ürün("dibek-kahvesi", ["türk-kahveleri"], 70));
ürünler.push(new Ürün("osmanlı-kahvesi", ["türk-kahveleri"], 70));
ürünler.push(new Ürün("damlasakızlı-türk-kahvesi", ["türk-kahveleri"], 65));
ürünler.push(new Ürün("çikolatalı-türk-kahvesi", ["türk-kahveleri"], 75));
//soğuk-içecekler
ürünler.push(new Ürün("su", ["soğuk-içecekler"], 35));
ürünler.push(new Ürün("sade-soda", ["soğuk-içecekler"], 35));
ürünler.push(new Ürün("meyveli-soda", ["soğuk-içecekler"], 45, "limon-karpuz çilek-elma"));
ürünler.push(new Ürün("ayran", ["soğuk-içecekler"], 45));
ürünler.push(new Ürün("ice-tea", ["soğuk-içecekler"], 50, "limon-şeftali-karpuz çilek-mango ananas"));
ürünler.push(new Ürün("coca-cola", ["soğuk-içecekler"], 50, "kola-kola zero"));
ürünler.push(new Ürün("fanta", ["soğuk-içecekler"], 50));
ürünler.push(new Ürün("sprite", ["soğuk-içecekler"], 50));
ürünler.push(new Ürün("meyve-suyu", ["soğuk-içecekler"], 45, "şeftali-vişne-ananas-karışık"));

ürünler.push(new Ürün("sıkma-portakal-suyu", ["soğuk-içecekler"], 90));
ürünler.push(new Ürün("limonata", ["soğuk-içecekler"], 75));
ürünler.push(new Ürün("churchill", ["soğuk-içecekler"], 60));
ürünler.push(new Ürün("redbull", ["soğuk-içecekler"], 80));


//soğuk kahveler
ürünler.push(new Ürün("ice-latte", ["soğuk-kahveler"], 85));
ürünler.push(new Ürün("ice-karamel-latte", ["soğuk-kahveler"], 90));
ürünler.push(new Ürün("ice-americano", ["soğuk-kahveler"], 75));
ürünler.push(new Ürün("ice-mocha", ["soğuk-kahveler"], 90));
ürünler.push(new Ürün("ice-white-mocha", ["soğuk-kahveler"], 90));
ürünler.push(new Ürün("frappe", ["soğuk-kahveler"], 95, "karamel-çikoalta-vanilya"));
ürünler.push(new Ürün("frappuchino", ["soğuk-kahveler"], 110, "karamel-çikolata-vanilya"));
ürünler.push(new Ürün("soğuk-türk-kahvesi", ["soğuk-kahveler"], 65));

//milkshake
ürünler.push(new Ürün("çilek-milkshake", ["milkshake"], 110));
ürünler.push(new Ürün("karamel-milkshake", ["milkshake"], 110));
ürünler.push(new Ürün("muz-milkshake", ["milkshake"], 110));
ürünler.push(new Ürün("vanilya-milkshake", ["milkshake"], 110));
ürünler.push(new Ürün("çikolata-milkshake", ["milkshake"], 110));
ürünler.push(new Ürün("karışık-milkshake", ["milkshake"], 120, "çilek,çikolata,muz"));

//smoothie
ürünler.push(new Ürün("çilek-smoothie", ["smoothie"], 105));
ürünler.push(new Ürün("muz-smoothie", ["smoothie"], 105));
ürünler.push(new Ürün("elma-smoothie", ["smoothie"], 105));
ürünler.push(new Ürün("kivi-smoothie", ["smoothie"], 105));
ürünler.push(new Ürün("trio-special-smoothie", ["smoothie"], 115, "secret"));

//frozen
ürünler.push(new Ürün("çilek-frozen", ["frozen"], 100));
ürünler.push(new Ürün("elma-frozen", ["frozen"], 100));
ürünler.push(new Ürün("muz-frozen", ["frozen"], 100));
ürünler.push(new Ürün("karpuz-frozen", ["frozen"], 100));
ürünler.push(new Ürün("mango-frozen", ["frozen"], 100));
ürünler.push(new Ürün("böğürtlen-frozen", ["frozen"], 100));
ürünler.push(new Ürün("frambuaz-frozen", ["frozen"], 100));
ürünler.push(new Ürün("bol-meyve-frozen", ["frozen"], 110));

//alkolsüz-kokteyler
ürünler.push(new Ürün("mojito", ["alkolsüz-kokteyl"], 200, "taze nane,lime,esmer şeker,sprite"))
ürünler.push(new Ürün("sex-on-the-beach", ["alkolsüz-kokteyl"], 210, "portakal suyu,ananas suyu,şeftali suyu,kızılcık şurubu"))
ürünler.push(new Ürün("redbull-fly", ["alkolsüz-kokteyl"], 220, "redbull,karışık meyveler,buz,çilek şurubu,kırık buz"))

ürünler.push(new Ürün("sweet-dreams", ["alkolsüz-kokteyl"], 200, "limonata,grenadine,blue curacao,lime,kırık buz"))
ürünler.push(new Ürün("trio-special", ["alkolsüz-kokteyl"], 250, "secret"))


//alkollü-kokteyller
ürünler.push(new Ürün("mojito", ["alkollü-kokteyller"], 300, "rum ,lime,nane,soda,crashed ice"))
ürünler.push(new Ürün("sex-on-the-beach", ["alkollü-kokteyller"], 300, "vodka ,portakal suyu,ananas likörü,şeftali likörü,kızılcık şurubu"))
ürünler.push(new Ürün("long-island-ice-tea", ["alkollü-kokteyller"], 400, "rum,vodka,gin,tekila,portakal likörü,sweet sour mix,kola"))
ürünler.push(new Ürün("cuba-libre", ["alkollü-kokteyller"], 280, "rum,kola,sweet sour mix"))
ürünler.push(new Ürün("blue-lagoon", ["alkollü-kokteyller"], 285, "vodka,limonata,blue curaçao"))
ürünler.push(new Ürün("blue-hawaii", ["alkollü-kokteyller"], 290, "rom, votka, mavi Curaçao ve ananas suyu"))
ürünler.push(new Ürün("gin-tonic", ["alkollü-kokteyller"], 270, "gin,tonic"))
ürünler.push(new Ürün("gin-fizz", ["alkollü-kokteyller"], 280, "gin,pudra şekeri,limon,soda"))
ürünler.push(new Ürün("aperol-spritz", ["alkollü-kokteyller"], 310, "aperol,köpüklü şarap,soda,portakal dilimi,buz"))
ürünler.push(new Ürün("vodkabull", ["alkollü-kokteyller"], 275, "vodka,redbull"))
ürünler.push(new Ürün("lynchburg-lemonade", ["alkollü-kokteyller"], 315, "jack,portakal likörü,limonata,buz"))
ürünler.push(new Ürün("margarita", ["alkollü-kokteyller"], 270, "tekila,portakal likörü ,sweet sour , tuzlu bardak"))
ürünler.push(new Ürün("jagerbomb", ["alkollü-kokteyller"], 280, "jagermaister,redbull"))
ürünler.push(new Ürün("daiquiri-frozen", ["alkollü-kokteyller"], 280, "vodka,çilek-elma-muz-karpuz-frambuaz-mango-karadut-karışık"))
ürünler.push(new Ürün("pinacolada", ["alkollü-kokteyller"], 265, "rum,hindistan cevizi sütü,ananas suyu,krema"))
ürünler.push(new Ürün("black-russian", ["alkollü-kokteyller"], 310, " votka, kahve likörü"))
ürünler.push(new Ürün("white-russian", ["alkollü-kokteyller"], 320, " votka, kahve likörü ve krema"))
ürünler.push(new Ürün("cosmopolitan", ["alkollü-kokteyller"], 280, "Votka, portakal likörü, kızılcık suyu, limon suyu,buz"))

//alkollü içecekler

window.addEventListener('popstate', function(event) {
   menuyap(anamenu);
   kartContainer.innerHTML="";
});

ürünler.push(new Ürün("tuborg", ["alkollü-içecekler"], 125, "50cl"))
ürünler.push(new Ürün("carlsberg", ["alkollü-içecekler"], 160, "50cl"))
ürünler.push(new Ürün("carlsberg", ["alkollü-içecekler"], 140, "33cl"))
ürünler.push(new Ürün("blanc", ["alkollü-içecekler"], 0, "33cl"))
ürünler.push(new Ürün("corona", ["alkollü-içecekler"], 160, "33cl"))
ürünler.push(new Ürün("rakı-tek", ["alkollü-içecekler"], 150, "5cl"))
ürünler.push(new Ürün("rakı-duble", ["alkollü-içecekler"], 225, "8cl"))
ürünler.push(new Ürün("vodka", ["alkollü-içecekler"], 230, "8cl"))
ürünler.push(new Ürün("gin", ["alkollü-içecekler"], 220, "8cl"))
ürünler.push(new Ürün("rum", ["alkollü-içecekler"], 220, "8cl"))
ürünler.push(new Ürün("tekila-shot", ["alkollü-içecekler"], 120, "5cl"))
ürünler.push(new Ürün("jagermaister", ["alkollü-içecekler"], 140, "5cl"))
ürünler.push(new Ürün("jack-daniels-tek", ["alkollü-içecekler"], 175, "5cl"))
ürünler.push(new Ürün("jack-daniels-duble", ["alkollü-içecekler"], 270, "8cl"))
ürünler.push(new Ürün("jack-daniels-şişe", ["alkollü-içecekler"], "Sorunuz", "35cl,50cl,70cl,100cl"))


ürünler.push(new Ürün("chivas-regal-tek", ["alkollü-içecekler"], 175, "4cl"))
ürünler.push(new Ürün("chivas-regal-duble", ["alkollü-içecekler"], 270, "8cl"))
ürünler.push(new Ürün("chivas-regal-şişe", ["alkollü-içecekler"], "Sorunuz", "35cl,50cl,70cl,100cl"))


ürünler.push(new Ürün("red-wine", ["alkollü-içecekler"], 190, "kırmızı şarap"))
ürünler.push(new Ürün("white-wine", ["alkollü-içecekler"], 190, "beyaz şarap"))
ürünler.push(new Ürün("Rose-wine", ["alkollü-içecekler"], 210, "pembe şarap"))











//al fakher
ürünler.push(new Ürün("çift-elma", ["al-fakher"], 275, "anason"));
ürünler.push(new Ürün("üzüm-nane", ["al-fakher"], 275));
ürünler.push(new Ürün("cappuccino", ["al-fakher"], 275));
ürünler.push(new Ürün("nane", ["al-fakher"], 250));
ürünler.push(new Ürün("karpuz", ["al-fakher"], 250));
ürünler.push(new Ürün("çilek", ["al-fakher"], 250));
ürünler.push(new Ürün("kavun", ["al-fakher"], 250));
ürünler.push(new Ürün("böğürtlen", ["al-fakher"], 250));
ürünler.push(new Ürün("portakal", ["al-fakher"], 250));
ürünler.push(new Ürün("limon", ["al-fakher"], 250));
ürünler.push(new Ürün("yaban-mersini", ["al-fakher"], 250));
ürünler.push(new Ürün("şeftali", ["al-fakher"], 250));

//adalya
ürünler.push(new Ürün("love-66", ["adalya"], 250, "karpuz,çilek,sakız,mentol"));
ürünler.push(new Ürün("lady-killer", ["adalya"], 250, "ananas,mango,çarkıfelek,mango"));
ürünler.push(new Ürün("marlin-monroe", ["adalya"], 250, "gül,limon,mentol"));
ürünler.push(new Ürün("ice-bonbon", ["adalya"], 250, "şekerleme,mentol"));
ürünler.push(new Ürün("hawaii", ["adalya"], 250, "ananas,mango,mentol"));
ürünler.push(new Ürün("moscow-nights", ["adalya"], 250, "çilek,ahududu,mentol"));
ürünler.push(new Ürün("berlin-nights", ["adalya"], 250, "ekşi şeftali"));
ürünler.push(new Ürün("tango-mango", ["adalya"], 250, "mango,çarkıfelek,mentol"));
ürünler.push(new Ürün("blue-ice", ["adalya"], 250, "yaban mersini,ice"));
ürünler.push(new Ürün("miAmor", ["adalya"], 250, "ananas,muz,mentol"));
ürünler.push(new Ürün("bakü-night", ["adalya"], 250, "kırmızı meyveler,tatlı nane"));
ürünler.push(new Ürün("dejavu", ["adalya"], 250, "kavun,vanilya,ice"));
ürünler.push(new Ürün("dondurma", ["adalya"], 250, "vanilya,çikolatalı dondurma,ice"));

//starbuzz
ürünler.push(new Ürün("code-69", ["starbuzz"], 700, "vişne, portakal, çarkıfelek, narenciye ice tea, meyveli şeker"));
ürünler.push(new Ürün("pink", ["starbuzz"], 700, "Orman Meyveleri,Gül,vanilya, çilek karışımı"));
ürünler.push(new Ürün("tropicool", ["starbuzz"], 700, "Ananas Ağırlıklı, Tropik Meyve, Nane"));
ürünler.push(new Ürün("sex-on-the-beach", ["starbuzz"], 700, "alkol,portakal,şeftali,limon"));
ürünler.push(new Ürün("blue-mist", ["starbuzz"], 700, "yaban mersini,nane,ice"));
//social-smoke
ürünler.push(new Ürün("lemon-chill", ["social-smoke"], 600, "tatlı ve keskin limon + taze nane"));
ürünler.push(new Ürün("watermelon-chill", ["social-smoke"], 600, "karpuz,taze nane"));
ürünler.push(new Ürün("wild-berry-chill", ["social-smoke"], 600, "orman meyveleri,taze nane"));
ürünler.push(new Ürün("baja-blue", ["social-smoke"], 600, "yaban mersini,taze nane"));
ürünler.push(new Ürün("citrus-peach", ["social-smoke"], 600, "şeftali,şekerleme,ice"));
ürünler.push(new Ürün("grapefruit-chill", ["social-smoke"], 600, "greyfurt,ice"));
ürünler.push(new Ürün("pearl-chill", ["social-smoke"], 600, "şeftali,ice"));



//special-of trio
ürünler.push(new Ürün("hypnotic-poision", ["special-of-trio"], 500, "secret"));
ürünler.push(new Ürün("as-a-ra", ["special-of-trio"], 500, "secret"));
ürünler.push(new Ürün("mystical", ["special-of-trio"], 500, "secret"));
ürünler.push(new Ürün("magic-of-alaaddin", ["special-of-trio"], 500, "secret"));
ürünler.push(new Ürün("cleopatra's-beautie", ["special-of-trio"], 500, "secret"));
//natural
ürünler.push(new Ürün("portakal", ["natural"], 600, "naturel meyve"));
ürünler.push(new Ürün("ananas", ["natural"], 700, "naturel meyve"));
ürünler.push(new Ürün("kavun", ["natural"], 750, "naturel meyve"));
ürünler.push(new Ürün("karpuz", ["natural"], 800, "naturel meyve"));
ürünler.push(new Ürün("fruit-mix", ["natural"], 1000, "naturel meyve"));




anamenu = ["yiyecek", "içecek", "nargile"]

yemekler = ["başlangıç", "tost", "gözleme", "wrap", "burger", "makarna", "sandviç", "anayemek", "tatlı", "salata"]

içilecekler = ["sıcak-içecekler", "bitki-çayları", "sıcak-kahveler", "türk-kahveleri",
    "soğuk-içecekler", "soğuk-kahveler", "milkshake", "smoothie",
    "frozen", "alkolsüz-kokteyl", "alkollü-içecekler", "alkollü-kokteyller"]


nargileler = ["al-fakher", "adalya", "starbuzz", "social-smoke", "special-of-trio", "natural"]

containerlistesi = document.querySelectorAll(".container")
//ürünleri göster
function displaycontent(obje) {
    var kartContainer = document.getElementById("ürün-kart-container");
    var kart = document.createElement("div");
    var description = document.createElement("div")

    var img = document.createElement("div");
    var baslik = document.createElement("h3");
    var hakkında = document.createElement("p")
    var fiyat = document.createElement("p");

    var ürünadı = obje.ürünadı;
    var ürün_hakkında = obje.ürün_hakkında

    hakkında.textContent = ürün_hakkında;

    if (obje.kategori == "adalya") {
        img.style.backgroundImage = "url('../adalya.png')";

    }
    else if (obje.kategori == "al-fakher") {
        img.style.backgroundImage = "url('../al-fakher.png')";
    }
    else if (obje.kategori == "starbuzz") {
        img.style.backgroundImage = "url('../starbuzz.png')";
    }
    else if (obje.kategori == "social-smoke") {
        img.style.backgroundImage = "url('../social-smoke.png')";
    }
    else if (obje.kategori == "natural") {
        img.style.backgroundImage = "url('../natural.png')";
    }
    else if (obje.kategori == "special-of-trio") {
        img.style.backgroundImage = "url('../special-of-trio.png')";
    }
    else {
        img.style.backgroundImage = "url('../img/" + ürünadı + ".png')";
    }



    description.className = "description"
    img.className = "image"; // İhtiyacınıza bağlı olarak bir sınıf ekleyebilirsiniz
    kart.className = "ürün-kart"; // Kartın CSS sınıfını belirleyin
    baslik.className = "başlık"
    hakkında.className = "hakkında"
    fiyat.className = "fiyat"

    baslik.textContent = ürünadı.replace(/-/g, " ");

    if (hakkında.textContent == "secret") {
        hakkında.style.color = "red"
    }
    fiyat.textContent = "Fiyat: " + obje.fiyat + " TL";
    description.appendChild(baslik);
    description.appendChild(hakkında)

    description.appendChild(fiyat)
    kart.appendChild(img);
    kart.appendChild(description);


    kartContainer.appendChild(kart);
}




function menuyap(dizi) {
    const menuu = document.querySelector(".menuu");
    menuu.innerHTML = "";

    const container = document.createElement("div");
    container.className = "container";
    dizi.forEach((isim) => {
        console.log(isim)
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        div2.className = "image";
        div2.style.backgroundImage = `url(../${isim.replace(" ", "-")}.png)`; // Tire ekleyerek arkaplan resmini belirt
        div2.style.backgroundPosition = "center";
        div2.style.backgroundSize = "cover"
        div2.style.backgroundRepeat = "no-repeat"
        const icdiv = document.createElement("div");
        icdiv.className = "isim";
        div1.className = "cerceve";
        icdiv.innerHTML = isim.replace(/-/g, " ");
        div1.appendChild(div2);
        div1.appendChild(icdiv);
        div1.addEventListener("click", (event) => {
            event.preventDefault();
            showCategory(div1);
            // Yeni URL'yi belirleme
            window.history.pushState({ category: 'kategori' }, 'Div1 Category', '#kategori');
            // Yeni URL'yi güncelleme
            window.history.replaceState({ category: 'kategori' }, 'Div1 Category', '#kategori');
        });
        
        container.appendChild(div1);

    });
   


    menuu.appendChild(container);
}


menuyap(anamenu);

function showCategory(item) {
    searchProduct(item.textContent)
    if (item.textContent == "yiyecek") {

        menuyap(yemekler);
        kartContainer.innerHTML="";
    }
    else if (item.textContent == "içecek") {

        menuyap(içilecekler);
        kartContainer.innerHTML="";
    }
    else if (item.textContent == "nargile") {

        menuyap(nargileler);
        kartContainer.innerHTML="";
    }
    else{
        menuyap()
    }

}

function searchProduct(searchTerm) {
    var kartContainer = document.getElementById("ürün-kart-container");
    kartContainer.innerHTML = ""; // Kartları temizle

    var filteredProducts = ürünler.filter(item => {
        return item.kategori.some(cat => {
            // Boşlukları ihmal etmek için kategori ve search term üzerinde trim ve boşlukları silme işlemleri uygula
            return cat.replace(/\s/g, '').toLowerCase().includes(searchTerm.replace(/\s/g, '-').toLowerCase());
        });
    });

    filteredProducts.forEach(item => displaycontent(item));
}


const kartContainer = document.getElementById("ürün-kart-container");
const toplamFiyatMiktar = document.getElementById("toplam-fiyat-miktar");

kartContainer.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const kartElement = clickedElement.closest(".ürün-kart");
    if (kartElement) {
        const productName = kartElement.querySelector("h3").textContent;
        const productPrice = Number(kartElement.querySelector("p:last-child").textContent.replace("Fiyat: ", "").replace(" TL", ""));
        addToCart(productName, productPrice);
    }
});
function searchName(value) {
    var kartContainer = document.getElementById("ürün-kart-container");
    kartContainer.innerHTML = ""; // Kartları temizle

    var filteredProducts = ürünler.filter(item => item.ürünadı.toLowerCase().includes(value.toLowerCase()));
    filteredProducts.forEach(item => displaycontent(item));
   
}