
    function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "Anasayfa")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "Hakkımızda")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "Proje")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "Sonuç"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "", /*#__PURE__*/

    React.createElement("strong", null, "")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "İki Yeni PD(II) / Fosfin / Hidrazit Komplekslerinin Sentezi,"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Karakterizasyonu ve Suzuki Eşleşme Reaksiyonu İle COVID-19"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, " İlaç Adayı Olan Atazanavir’in "),/*#__PURE__*/
    React.createElement("span", { className: "line" },  "Kısmi Sentezinde Katalitik Etkinliğinin İncelenmesi")), /*#__PURE__*/                        
                        

                        
                        
                        
    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("a", { href: "" }, ""), /*#__PURE__*/
    React.createElement("a", { href: "", className: "" }, "")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Biz kimiz?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Eskişehir Teknik Üniversitesi"), /*#__PURE__*/
    React.createElement("p", null, "Tez Öğrencisi: Beyza Minel Nezir"), /*#__PURE__*/
    React.createElement("p", null, "Tez Öğrencisi: Cansu Şahan"), /*#__PURE__*/


    React.createElement("p", null, "Danışman: Doç. Dr. Hakan Ünver")), /*#__PURE__*/




    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Özet"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, ""), /*#__PURE__*/
    React.createElement("p", null, "Uygun bir katalizör kullanılarak gerçekleştirilen reaksiyonların, zaman, enerji, maliyet, verim ve seçicilik gibi katalizör kullanılmadan gerçekleştirilenlerine kıyasla önemli üstünlükleri vardır."), /*#__PURE__*/




    React.createElement("p", null, "Suzuki türü eşleşme reaksiyonları olarak adlandırılan karbon-karbon (C-C) eşleştirme basamağında kullanılan katalizörler arasında paladyum kompleksleri sıklıkla yer almaktadır.")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, ""), /*#__PURE__*/
    React.createElement("p", null, "Sunulan çalışma kapsamında, para- konumunda metil grupları bulunan trifenilfosfin ligandı ve iki farklı hidrazit ligandı ile iki farklı paladyum (II) kompleksi sentezlenmiş olup ve kompleklerin yapıları çeşitli yöntemler (X-ışınları tek kristal sp., Kızılötesi, Nükleer Manyetik Rezonans sp.)  Kullanılarak aydınlatılmıştır."), /*#__PURE__*/





    React.createElement("p", null, "Sentezlenen komplekslerin katalitik etkinlikleri, ticari bir antiviral ajan olan ve Covid-19 tedavisinde de araştırılan, Atazanavir molekülünün kısmi sentezinde araştırılmıştır."))))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
   


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("a", {  }, " ", /*#__PURE__*/
    React.createElement("i", { className: "" })), /*#__PURE__*/

    React.createElement("a", { href: link, }, "", /*#__PURE__*/
    React.createElement("i", { className: "" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Hipotez"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
                        React.createElement("br", null),
    React.createElement("p", { className: "subtitle" }, "Sunulan projede, fosfin ve hidrazit ligandlarının paladyum komplekslerindeki ayrı ayrı etkinliklerini bir araya getirmek hedefi ile iki yeni Pd(II)/p-tolTFF/hidrazit metal katalizörü sentezlenmesi ve sentezlenen katalizörlerin Suzuki C-C reaksiyonundaki etkinliklerinin araştırılması amaçlanmıştır.", /*#__PURE__*/
                        
    
    React.createElement("p", null, "Suzuki eşleşme reaksiyonundan dünya genelinde etkinliği kanıtlanmış ve kullanım onayı almış Losartan, Valsartan, Ruksolitinib gibi ilaç moleküllerinin sentezinde yararlanılmaktadır."), /*#__PURE__*/
                        
    React.createElement("p", null, "Proje kapsamındaki bir diğer hedefimiz ise, Kovid-19 tedavisinde umut verici bir ajan olarak halen araştırması devam eden ve piyasada HIV tedavisi amacıyla kullanılan bir antiviral ajan olan Atazanavir’in sentezinde gerekli 2-fenilpiridin’in Suzuki C-C eşleşme reaksiyonu ile katalitik olarak elde edilmesidir."), /*#__PURE__*/
    React.createElement("p", null, "Atazanavir, Amerikan Ulusal Gıda ve İlaç Dairesi (FDA) tarafından 2003 yılında kullanımı onaylanan ve HIV (İnsan Bağışıklık Yetmezliği Virüsü) tedavisinde kullanılan bir antiviral ilaç molekülüdür (Vechia vd., 2013)."), /*#__PURE__*/
    React.createElement("p", null, "Katalizörler, dünya genelinde tarım ilaçları, kozmetik ürünler, petrokimya ürünleri, otomotiv sektörü ve özellikle ilaç aktif bileşiklerin eldesi gibi kritik alanlarda yaygın olarak kullanılmakta ve bu alana yapılan yatırımlar gün geçtikçe artmaktadır. Bu nedenle tüm dünyada katalizör araştırmalarına özellikle üniversiteler ve Ar-Ge merkezlerinde büyük bütçeler ayrılmaktadır."), /*#__PURE__*/
                        
    React.createElement("p", null, "Katalizör sentezinde nihai hedef, ürün veriminin yüksek olması, ürün seçiciliğinin yüksek olması ve az enerji ve zaman harcayarak hedef ürünlere ulaşılmasıdır. Bu hedeflere ne kadar yaklaşılırsa doğrudan ve dolaylı olarak ülke ekonomisine büyük katkılar sağlanabilmektedir."), /*#__PURE__*/
    React.createElement("p", null, "Bir katalizörün etkin olabilmesi için çeşitli faktörler bulunmaktadır. Bunlar arasında, katalitik tepkimenin türü (hidrojenasyon, oksidasyon vb.), reaksiyonda kullanılacak çözücülerin türleri (protik, aprotik v.b.), geçiş metalinin cinsi (palladyum, bakır v.b.) ve en önemlisi ise metale bağlanan organik yapıdaki ligandın türü ve elektronik özellikleridir. Ligandların katalizör aktivitesi ve seçicilikleri üzerindeki büyük etkileri keşfedildikten sonra, farklı kimyasal özelliklere sahip ligandların tasarımı ve sentezi hız kazanmıştır."), /*#__PURE__*/
    React.createElement("p", null, "Sunulan projede, fosfin ve hidrazit ligandlarının paladyum komplekslerindeki ayrı ayrı etkinliklerini bir araya getirmek hedefi ile iki yeni Pd(II)/p-tolTFF/hidrazit metal katalizörü sentezlenmesi ve sentezlenen katalizörlerin Suzuki C-C reaksiyonundaki etkinliklerinin araştırılması amaçlanmıştır."), /*#__PURE__*/
    React.createElement("p", null, "Suzuki C-C eşleşme reaksiyonu, bir aril halojenür ile bir aril boronik asitin, bazik ortamda biaril oluşturmak üzere gerçekleştiği bir C-C eşleşme reaksiyonudur (Kotha vd., 2002). Suzuki eşleşme reaksiyonundan dünya genelinde etkinliği kanıtlanmış ve kullanım onayı almış Losartan, Valsartan, Ruksolitinib gibi ilaç moleküllerinin sentezinde yararlanılmaktadır."), /*#__PURE__*/
    React.createElement("p", null, "Proje kapsamındaki bir diğer hedefimiz ise, Kovid-19 tedavisinde umut verici bir ajan olarak halen araştırması devam eden ve piyasada halen HIV tedavisi amacıyla kullanılan bir antiviral ajan olan Atazanavir’in sentezinde gerekli 2-fenilpiridin’in Suzuki C-C eşleşme reaksiyonu ile katalitik olarak elde edilmesidir."), /*#__PURE__*/
    React.createElement("p", null, "Sonuç olarak;"), /*#__PURE__*/
    React.createElement("p", null, "- Fosfin ve hidrazit iskeletine sahip ligandları birlikte içeren orijinal yapıdaki iki yeni paladyum kompleksinin sentezlenmesi,"), /*#__PURE__*/
    React.createElement("p", null, "- Sentezlenecek yeni Pd(II) komplekslerinin Suzuki C-C eşleşme reaksiyonu üzerinde katalitik etkinliğinin araştırılması ve"), /*#__PURE__*/
    React.createElement("p", null, "- Elde edilen katalitik sistem yoluyla bir Kovid-19 ilaç adayı olan Atazanavir sentezinde gerekli olan 2- fenilpiridin’in elde edilecek olması, sunulan projenin özgünlüğünü ortaya koymakta ve projeden alınacak sonuçların literatüre önemli katkı sağlayacağı düşünülmektedir."), /*#__PURE__*/
           React.createElement("p", null, " "), /*#__PURE__*/                
    React.createElement("br", null), /*#__PURE__*/
                        React.createElement("br", null),
    React.createElement("h3", { className: "title" }, "Amaç ve Hedefler"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
                         React.createElement("br", null),
                         
    React.createElement("p", null, "Bir HIV tedavi ajanı olarak onay almış Atazanavir’in Kovid-19’a karşı umut verici etkilerinin görülmesi ve bu molekülün sentez aşamalarından birisinin C-C eşleşme reaksiyonu içeriyor olması bu molekülü daha da değerli hale getirmiştir. Bu nedenlerle; projede ana amaç, Suzuki C-C eşleşme reaksiyonundan yola çıkılarak, Atazanavir sentezinde gerekli olan biaril (2-fenilpiridin) bileşiğini optimum koşullarda elde etmektir. Bu sebeplerden dolayı önerilen projenin literatüre, grubumuzun bilgi birikimine, laboratuvar deneyimlerimize ve dolaylı olarak ülkemize ciddi katkılar sunacağı düşünülmektedir."), /*#__PURE__*/                      
    React.createElement("br", null), /*#__PURE__*/
                        React.createElement("br", null),
    React.createElement("h3", { className: "title" }, "Yöntem"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
                                                 React.createElement("br", null),
    React.createElement("p", null, "Projede planlanan sentezlerin tamamı, inert atmosfer (azot gazı) altında gerçekleştirilmiştir. Komplekslerin sentez reaksiyonlarının takibi ince tabaka kromatografisi ile gerçekleştirilmiştir. Komplekslerin tamamı NMR (1H, 13C), FT-IR, Elementel analiz gibi tekniklerle karakterize edilmiş olup ve kompleks bileşiklerin yapıları  X-ışınları tek kristal spektroskopisi yöntemi ile de aydınlatılmıştır."), /*#__PURE__*/
    React.createElement("p", null, "Yapı karakterizasyon çalışmalarının ardından, sentezlenen Pd(II) komplekslerinin katalitik etkinlikleri Suzuki- Miyaura C-C eşleşme reaksiyonları üzerinde test edilmiştir. Katalitik reaksiyonlarda, çözücü türü etkisi, substrat/katalizör oranı, baz türü etkisi, sıcaklık etkisi ve zaman etkisi testleri yapılmıştır."), /*#__PURE__*/
                        
    React.createElement("br", null), /*#__PURE__*/
                        React.createElement("br", null),
    React.createElement("h3", { className: "title" }, "Katalitik Çalışma"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/                    
                        
                        React.createElement("br", null),
    React.createElement("p", null, "Yapılan çalışmaları 3 ana başlıkta toplayacak olursak;"), /*#__PURE__*/
    React.createElement("p", null, "1- İki yeni Paladyum/TFF/hidrazit kompleksinin sentezlenmesi ve saflaştırılması,"), /*#__PURE__*/
    React.createElement("p", null, "2- Sentezlenen ve saflaştırılan komplekslerin yapılarının aydınlatılması"), /*#__PURE__*/
    React.createElement("p", null, "3- Her iki kompleksin Suzuki eşleşme reaksiyonu üzerindeki katalitik etkinliklerinin incelenmesi."), /*#__PURE__*/  
    React.createElement("p", null, " "), /*#__PURE__*/          
    React.createElement("h3", { className: "baslik" }, "Pd(II)/p-tolTFF/hidrazit komplekslerinin sentezi"), /*#__PURE__*/
    React.createElement("p", null, "Bu aşamada p-tolTFF ile para konumlarında hidrojen (-H) ve hidrojene nazaran daha elektron verici bir grup olan metil (-CH3) grupları içeren hidrazit ligandları, paladyum(II) klorür ile asetonitril çözücüsü içerisinde ayrı ayrı reaksiyona sokularak Şekil’de verilen iki farklı Pd(II)/p-tolTFF/hidrazit kompleksi sentezlenmiştir."), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/

    React.createElement("p", { className: "r1" }, " "), /*#__PURE__*/
                        
                        
    React.createElement("a", { href: "", target: "", rel: "" }, ""), "")), /*#__PURE__*/


    
                        
    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
                        
    React.createElement(Project, {
      title: "",
      img: 'https://atazanavir.github.io/project-/img/grafik.001.png',
      tech: "",
      link: "",
      repo: "" }, /*#__PURE__*/

    React.createElement("small", null, "Farklı sübstitüentler içeren benzhidrazit ligandlarının kullanılmasındaki amaç, hidrazit ligandlarının azot atomu üzerindeki elektron yoğunluğunu değiştirerek Suzuki eşleşme reaksiyonları üzerindeki etkisini incelemektir."), /*#__PURE__*/


    React.createElement("p", null, "")),
                        
                        
    React.createElement("p", null, "Daha önce ekibimiz tarafından yapılan çalışmalarda ve bu çalışma için elde edilen x-ışınları analizine göre paladyum merkez atomununun hidrazit ligandlarına çok yüksek ihtimalle sadece amin (-NH2) ucundan bağlanmayı tercih ettiği bilinmektedir. Bu nedenle her iki kompleks için de benzer bir yapı önerilmiştir."), /*#__PURE__*/  
                   

  React.createElement("br", null),

                       
    React.createElement("h3", { className: "baslik" }, "Suzuki C-C eşleşme reaksiyonu deneyleri"), /*#__PURE__*/
    React.createElement("p", null, "Katalitik reaksiyonlar üzerinde çözücü türü, substrat/katalizör oranı, baz türü, sıcaklık ve zaman parametreleri gibi değişkenler etkili olacağından, öncelikle belirli parametreler sabit tutularak bir model reaksiyon gerçekleştirilmiştir."), /*#__PURE__*/  
    React.createElement("p", null, "Tipik bir Suzuki C-C eşleşme reaksiyonu için: Katalizör (%0,01 mmol), aril halojenür (1 mmol), fenilboronik asit (1.2 mmol) ve baz (1.2 mmol) çözücü içeren dibi yuvarlak balon içerisinde eklemiştir."), /*#__PURE__*/                      
    React.createElement("p", null, "Ardından istenilen sıcaklık ayarlanmıştır."), /*#__PURE__*/
    React.createElement("p", null, "Reaksiyon ortamından belirli aralıklarla numuneler alınmış ve her bir numune gaz kromatografisi cihazında analiz edilmiştir."), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/
   
                        
                            React.createElement(Project, {
      title: "",
      img: 'https://atazanavir.github.io/project-/img/grafik.002.png',
      tech: "",
      link: "",
      repo: "" }, /*#__PURE__*/

    React.createElement("small", null, "Analizler sırasında her bir substratın ve ürünün saf halleri standart olarak kullanılmış ve arilbromür miktarındaki azalmaya göre % dönüşüm belirlenmiştir."), /*#__PURE__*/

                                                
                                                
                                                
                                                
    React.createElement("p", null, ""), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/  
    React.createElement("p", null, ""), /*#__PURE__*/                      
    React.createElement("p", null, ""), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/  
                        
    React.createElement("p", null, "")),
                        
                                                
     
                       
                       
                       ),
                        
    React.createElement("div", { className: "denemeyedeger" }, /*#__PURE__*/
                          React.createElement("p", null, "."), /*#__PURE__*/
                       
               
         ),
            React.createElement("div", { className: "deneme" }, /*#__PURE__*/
                          React.createElement("p", null, "."), /*#__PURE__*/
                       
               
         ),             
                       
                       )));







};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h1", { className: "baslik" }, "Sonuç ", /*#__PURE__*/), /*#__PURE__*/
                
                        
                        
                        
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
                        
    React.createElement("br", null),
    React.createElement("p", null, "Tüm bu çalışmalar sonucunda Kovid-19 tedavisinde umut verici bir antiviral ajan olan atazanavir’in biaril kısmına ait sentez basamağının etkili ve verimli bir şekilde alternatif yolları keşfedilmiş ve tartışılmıştır."), /*#__PURE__*/
    React.createElement("p", null, "Katalizör kodu 1 olan maddenin, katalitik çalışmaları sonucunda elde edilen veriler ışığında sub/cat oranı 100 olan, en optimum uygunluğa sahip çözücünün 1:1 oranında 1,4-dioxane/h2o, optimum sıcaklığın 80C ve uygun baz K2CO3 (potasyum karbonat) olarak belirlenmiştir."), /*#__PURE__*/
    React.createElement("p", null, "Katalizör kodu 2 olan maddenin, katalitik çalışmaları sonucunda elde edilen veriler ışığında, sub/cat oranı 100 olan en optimum uygunluğa sahip çözücünün 1:1 oranında EtOH/H2O, optimum sıcaklığın 60C ve uygun baz Na2co3 (sodyum karbonat) olarak belirlenmiştir."), /*#__PURE__*/
                                   

    React.createElement("p", { className: "subtitle" }, " ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "" }, "", /*#__PURE__*/

    React.createElement("i", { className: "" }), "", /*#__PURE__*/

    React.createElement("i", { className: "" }), ""), "")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
                      
                       
                       
                       ))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "Sitemizi ziyaret ettiğiniz için teşekkürler"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Beyza Minel Nezir, Cansu Şahan"), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
     },

    ' ', /*#__PURE__*/
   ), /*#__PURE__*/
));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
    