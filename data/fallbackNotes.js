const fallbackNotes = [
    // ---------------- FRONTEND (#3b82f6) ----------------
    {
        _id: "fb-fe-1", question: "React Re-render Optimizasyonu", 
        description: "Gereksiz render'ları önlemek için React.memo, useMemo ve useCallback hook'ları kullanılır. State'i component ağacının alt dallarında tutmak (state colocation) performansı artırır.", 
        category: "Frontend", color: "#3b82f6", createdAt: new Date()
    },
    {
        _id: "fb-fe-2", question: "Micro-Frontend Mimarisi Nedir?", 
        description: "Büyük monolitik frontend uygulamalarını daha küçük, bağımsız geliştirilebilen ve dağıtılabilen parçalara (React, Vue vb. bir arada) bölme yaklaşımıdır. Module Federation sıklıkla kullanılır.", 
        category: "Frontend", color: "#3b82f6", createdAt: new Date()
    },
    {
        _id: "fb-fe-3", question: "Server-Sent Events (SSE) Kullanımı", 
        description: "Sunucudan istemciye tek yönlü, sürekli veri akışı sağlamak için idealdir. WebSockets'ten farklı olarak sadece sunucu veri gönderir (örneğin canlı telemetri, GPS veya batarya takibi için).", 
        category: "Frontend", color: "#3b82f6", createdAt: new Date()
    },
    {
        _id: "fb-fe-4", question: "Context API vs Redux/Zustand", 
        description: "Context API düşük frekanslı global stateler (tema, dil) için iyidir. Sık değişen karmaşık stateler ve alarm/indexleme gibi işlemler için Zustand veya Redux gibi yapılar gereklidir.", 
        category: "Frontend", color: "#3b82f6", createdAt: new Date()
    },
    {
        _id: "fb-fe-5", question: "React Native Bridge Mantığı", 
        description: "JavaScript thread'i ile Native thread (Java/Kotlin veya Objective-C) arasındaki iletişimi sağlayan asenkron mesajlaşma köprüsüdür. Yeni mimaride yerini JSI (JavaScript Interface) almaktadır.", 
        category: "Frontend", color: "#3b82f6", createdAt: new Date()
    },
    {
        _id: "fb-fe-6", question: "Cypress ile E2E Testing", 
        description: "Tarayıcı üzerinde gerçek kullanıcı gibi tıklama, form doldurma senaryolarını test eder. Jest gibi unit test araçlarından farklı olarak uygulamanın uçtan uca çalışabilirliğini doğrular.", 
        category: "Frontend", color: "#3b82f6", createdAt: new Date()
    },
    {
        _id: "fb-fe-7", question: "Virtual DOM Diffing Algoritması", 
        description: "React, gerçek DOM'u güncellemeden önce bellekteki Virtual DOM ağaçlarını karşılaştırır (Reconciliation). Sadece değişen kısımları tespit edip minimum DOM manipülasyonu yapar.", 
        category: "Frontend", color: "#3b82f6", createdAt: new Date()
    },
    {
        _id: "fb-fe-8", question: "Vite vs Webpack", 
        description: "Webpack tüm uygulamayı paketleyip sunarken, Vite geliştirme aşamasında ES modüllerini (ESM) kullanır ve anında HMR (Hot Module Replacement) sağlayarak çok daha hızlı çalışır.", 
        category: "Frontend", color: "#3b82f6", createdAt: new Date()
    },
    {
        _id: "fb-fe-9", question: "Event Delegation (Olay Temsili)", 
        description: "Çok sayıda alt elemana ayrı ayrı event listener eklemek yerine, ortak bir üst (parent) elemana tek bir listener ekleyip 'event bubbling' özelliğinden faydalanma tekniğidir.", 
        category: "Frontend", color: "#3b82f6", createdAt: new Date()
    },
    {
        _id: "fb-fe-10", question: "Jetpack Compose Temelleri", 
        description: "Android için modern, deklaratif UI toolkit'tir. XML kullanmak yerine tamamen Kotlin ile UI yazılmasını sağlar, state değişimlerinde sadece ilgili componentleri (recomposition) günceller.", 
        category: "Frontend", color: "#3b82f6", createdAt: new Date()
    },

    // ---------------- BACKEND (#10b981) ----------------
    {
        _id: "fb-be-1", question: "Node.js Event Loop", 
        description: "Tek iş parçacıklı (single-threaded) Node.js'in non-blocking I/O yapabilmesini sağlar. İşlemler asenkron olarak arka planda çalışır ve bitince callback kuyruğuna atılır.", 
        category: "Backend", color: "#10b981", createdAt: new Date()
    },
    {
        _id: "fb-be-2", question: "RabbitMQ ile Message Broker", 
        description: "Mikroservisler arası asenkron iletişimi sağlar. Yayıncı (Publisher) mesajı gönderir, Exchange bunu uygun Kuyruğa (Queue) yönlendirir ve Tüketici (Consumer) mesajı işler.", 
        category: "Backend", color: "#10b981", createdAt: new Date()
    },
    {
        _id: "fb-be-3", question: "Spring Boot Dependency Injection", 
        description: "Nesnelerin (bean'lerin) yaratılma ve yönetilme sorumluluğunun Spring IoC Container'a bırakılmasıdır. Kodun test edilebilirliğini ve modülerliğini büyük oranda artırır.", 
        category: "Backend", color: "#10b981", createdAt: new Date()
    },
    {
        _id: "fb-be-4", question: "JWT vs Session Authentication", 
        description: "Session stateful'dur, sunucu belleğinde tutulur. JWT (JSON Web Token) ise stateless'tır, kullanıcı bilgisi şifrelenmiş olarak token içinde istemcide durur. Yatay ölçekleme (scaling) için JWT daha iyidir.", 
        category: "Backend", color: "#10b981", createdAt: new Date()
    },
    {
        _id: "fb-be-5", question: "REST API Idempotency", 
        description: "Aynı isteğin birden fazla kez yapıldığında sunucu durumunu sadece bir kez değiştirmesidir. GET, PUT, DELETE idempotent'tir. POST idempotent değildir.", 
        category: "Backend", color: "#10b981", createdAt: new Date()
    },
    {
        _id: "fb-be-6", question: "Flask ile RESTful Yapısı", 
        description: "Python tabanlı mikro web framework'üdür. Hafif yapısı sayesinde özellikle yapay zeka ve veri bilimi modellerini hızlıca API'a dönüştürüp frontend'e sunmak için idealdir.", 
        category: "Backend", color: "#10b981", createdAt: new Date()
    },
    {
        _id: "fb-be-7", question: "WebSockets Çalışma Mantığı", 
        description: "İstemci ve sunucu arasında tam çift yönlü (full-duplex), sürekli açık kalan bir TCP bağlantısı kurar. Gerçek zamanlı mesajlaşma ve anlık veri aktarımı için kullanılır.", 
        category: "Backend", color: "#10b981", createdAt: new Date()
    },
    {
        _id: "fb-be-8", question: "Mikroservis Mimarisinin Zorlukları", 
        description: "Veri tutarlılığını sağlamak (Distributed Transactions), servisler arası gecikme (latency), hata takibi (distributed tracing) ve deployment karmaşıklığı en büyük zorluklarıdır.", 
        category: "Backend", color: "#10b981", createdAt: new Date()
    },
    {
        _id: "fb-be-9", question: "Express.js Middleware Mantığı", 
        description: "Gelen istek (req) ile sunucu yanıtı (res) arasına giren fonksiyonlardır. Kimlik doğrulama, loglama, CORS ayarları ve hata yakalama işlemleri middleware'ler üzerinden yapılır.", 
        category: "Backend", color: "#10b981", createdAt: new Date()
    },
    {
        _id: "fb-be-10", question: "Garbage Collection (Java)", 
        description: "Bellekte (Heap) artık hiçbir referansı kalmayan ve kullanılmayan nesnelerin otomatik olarak temizlenerek bellek sızıntılarının (memory leak) önlenmesi işlemidir.", 
        category: "Backend", color: "#10b981", createdAt: new Date()
    },

    // ---------------- DATABASE (#f59e0b) ----------------
    {
        _id: "fb-db-1", question: "Veritabanlarında Indexing", 
        description: "Okuma (read) işlemlerini hızlandırmak için kullanılan veri yapılarıdır (örn: B-Tree). Yazma (write) hızını yavaşlatır çünkü her eklemede indexin de güncellenmesi gerekir.", 
        category: "Database", color: "#f59e0b", createdAt: new Date()
    },
    {
        _id: "fb-db-2", question: "ACID Prensipleri", 
        description: "İlişkisel veritabanı işlemlerinin güvenilirliği için: Atomicity (Ya hep ya hiç), Consistency (Tutarlılık), Isolation (İzolasyon), Durability (Kalıcılık).", 
        category: "Database", color: "#f59e0b", createdAt: new Date()
    },
    {
        _id: "fb-db-3", question: "N+1 Sorgu Problemi", 
        description: "Bir ana kayıt (1 sorgu) çekildikten sonra, bu kayda bağlı alt kayıtları getirmek için bir döngü içinde veritabanına N kez gereksiz yere sorgu atılması hatasıdır.", 
        category: "Database", color: "#f59e0b", createdAt: new Date()
    },
    {
        _id: "fb-db-4", question: "PostgreSQL JSONB Veri Tipi", 
        description: "JSON verilerini binary formatta saklar. Sadece metin olarak tutan JSON formatının aksine, içindeki alanlar indexlenebilir ve çok daha hızlı sorgulanabilir.", 
        category: "Database", color: "#f59e0b", createdAt: new Date()
    },
    {
        _id: "fb-db-5", question: "Database Connection Pooling", 
        description: "Her istekte yeni bir veritabanı bağlantısı açmak maliyetlidir. Havuzlama, hazırda açık tutulan bağlantıların (pool) tekrar tekrar kullanılmasını sağlayarak performansı artırır.", 
        category: "Database", color: "#f59e0b", createdAt: new Date()
    },
    {
        _id: "fb-db-6", question: "NoSQL vs SQL Kullanım Alanları", 
        description: "Esnek şema ve yatay ölçekleme gereken devasa log/doküman verilerinde MongoDB (NoSQL); katı ilişkiler, transaction ve veri bütünlüğü gerektiğinde PostgreSQL/MySQL tercih edilir.", 
        category: "Database", color: "#f59e0b", createdAt: new Date()
    },
    {
        _id: "fb-db-7", question: "Normalizasyon vs Denormalizasyon", 
        description: "Normalizasyon veri tekrarını önlemek için tabloları böler (Write optimizasyonu). Denormalizasyon ise okuma hızını artırmak için verileri aynı tabloda kasten birleştirir (Read optimizasyonu).", 
        category: "Database", color: "#f59e0b", createdAt: new Date()
    },
    {
        _id: "fb-db-8", question: "MongoDB Aggregation Pipeline", 
        description: "Verileri çoklu aşamalardan geçirerek işleme sistemidir. SQL'deki GROUP BY, JOIN ve filtreleme işlemlerinin $match, $group, $lookup gibi operatörlerle NoSQL karşılığıdır.", 
        category: "Database", color: "#f59e0b", createdAt: new Date()
    },
    {
        _id: "fb-db-9", question: "Firebase Firestore Gerçek Zamanlılık", 
        description: "İstemciler koleksiyonlara 'snapshot listener' ekler. Veritabanında bir döküman değiştiğinde Firebase bunu doğrudan aktif bağlı cihazlara WebSocket/SSE benzeri bir yapıyla pushlar.", 
        category: "Database", color: "#f59e0b", createdAt: new Date()
    },
    {
        _id: "fb-db-10", question: "Redis Caching Mimarisi", 
        description: "In-memory (bellek içi) çalışan NoSQL veritabanıdır. Sık sorgulanan ama nadir değişen verileri diske gitmeden milisaniyeler içinde sunmak için ara katman (cache) olarak kullanılır.", 
        category: "Database", color: "#f59e0b", createdAt: new Date()
    },

    // ---------------- NETWORK (#8b5cf6) ----------------
    {
        _id: "fb-nw-1", question: "TCP vs UDP", 
        description: "TCP paketlerin sırayla ve kayıpsız ulaştığını garanti eder (Web, Email). UDP hız odaklıdır, bağlantısızdır, paket kontrolü yapmaz (Canlı yayın, Askeri Telsiz, Oyun).", 
        category: "Network", color: "#8b5cf6", createdAt: new Date()
    },
    {
        _id: "fb-nw-2", question: "SNMP v3 Güvenliği", 
        description: "Ağ cihazlarını yönetmek için kullanılan protokolün en güvenli sürümüdür. Önceki sürümlerden farklı olarak paket şifreleme ve gelişmiş kullanıcı yetkilendirmesi (Authentication) sunar.", 
        category: "Network", color: "#8b5cf6", createdAt: new Date()
    },
    {
        _id: "fb-nw-3", question: "CORS (Cross-Origin Resource Sharing)", 
        description: "Tarayıcıların güvenlik mekanizmasıdır. Farklı bir domain'den (origin) gelen API isteklerinin kabul edilmesi için sunucunun özel HTTP header'ları göndermesini şart koşar.", 
        category: "Network", color: "#8b5cf6", createdAt: new Date()
    },
    {
        _id: "fb-nw-4", question: "SSL/TLS Handshake Adımları", 
        description: "İstemci ve sunucunun güvenli bağlantı kurmadan önce merhaba (Hello) dediği, sertifikaları doğruladığı ve kullanılacak şifreleme anahtarlarında anlaştığı güvenlik sürecidir.", 
        category: "Network", color: "#8b5cf6", createdAt: new Date()
    },
    {
        _id: "fb-nw-5", question: "OSI Modeli Katmanları", 
        description: "Ağ iletişimini standartlaştıran 7 katmandır. Fiziksel, Veri Bağı, Ağ (IP), Taşıma (TCP/UDP), Oturum, Sunum, Uygulama (HTTP, SNMP). Sorun çözmede katmanlı düşünmeyi sağlar.", 
        category: "Network", color: "#8b5cf6", createdAt: new Date()
    },
    {
        _id: "fb-nw-6", question: "HTTP/2 vs HTTP/1.1", 
        description: "HTTP/2 verileri metin yerine binary iletir, multiplexing sayesinde tek bir TCP bağlantısı üzerinden aynı anda birden fazla request/response asenkron olarak geçirilebilir.", 
        category: "Network", color: "#8b5cf6", createdAt: new Date()
    },
    {
        _id: "fb-nw-7", question: "DNS Resolution (Çözümleme)", 
        description: "Kullanıcının girdiği alan adının (ayse.com), sunucunun IP adresine (192.168.x.x) dönüştürülmesi sürecidir. Local cache, ISP ve Root serverlar sırayla taranır.", 
        category: "Network", color: "#8b5cf6", createdAt: new Date()
    },
    {
        _id: "fb-nw-8", question: "Reverse Proxy Görevi", 
        description: "İnternet ile iç sunucular arasında duran bir araçtır (Nginx). İstemci doğrudan arka ucun IP'sini bilemez. Yük dengeleme, SSL şifre çözme ve güvenlik duvarı görevi görür.", 
        category: "Network", color: "#8b5cf6", createdAt: new Date()
    },
    {
        _id: "fb-nw-9", question: "Bluetooth SPP (Serial Port Profile)", 
        description: "Bluetooth üzerinden klasik RS-232 seri port kablosunu emüle eden bir protokoldür. Sensörlerden, takograflardan veya dış donanımlardan mobil cihazlara veri aktarımı sağlar.", 
        category: "Network", color: "#8b5cf6", createdAt: new Date()
    },
    {
        _id: "fb-nw-10", question: "WebRTC Mantığı", 
        description: "Tarayıcılar veya cihazlar arasında (Peer-to-Peer) aracısız bir şekilde ses, görüntü veya veri aktarımı sağlayan gerçek zamanlı iletişim protokolüdür.", 
        category: "Network", color: "#8b5cf6", createdAt: new Date()
    },

    // ---------------- SYSTEM & ARCHITECTURE (#ef4444) ----------------
    {
        _id: "fb-sys-1", question: "Yatay (Horizontal) vs Dikey (Vertical) Scaling", 
        description: "Dikey: Mevcut sunucunun RAM/CPU kapasitesini artırmak. Yatay: Aynı sunucudan yan yana birden fazla kopyalayıp yükü Load Balancer ile dağıtmaktır.", 
        category: "System", color: "#ef4444", createdAt: new Date()
    },
    {
        _id: "fb-sys-2", question: "Docker Container Mantığı", 
        description: "Uygulamayı çalışması gereken tüm bağımlılıkları (Node, DB vs) ile birlikte izole bir kutuya (container) koyar. 'Benim makinemde çalışıyordu' problemini ortadan kaldırır.", 
        category: "System", color: "#ef4444", createdAt: new Date()
    },
    {
        _id: "fb-sys-3", question: "CAP Teoremi", 
        description: "Dağıtık sistemlerde aynı anda sadece ikisi sağlanabilir: Consistency (Tutarlılık), Availability (Erişilebilirlik), Partition Tolerance (Bölünme Toleransı).", 
        category: "System", color: "#ef4444", createdAt: new Date()
    },
    {
        _id: "fb-sys-4", question: "Knowledge Distillation (AI Güvenliği)", 
        description: "Büyük ve karmaşık bir AI modelinin (Teacher) ürettiği çıktıların, daha küçük bir modele (Student) öğretilmesi işlemidir. IP hırsızlığını ve tersine mühendisliği zorlaştırır.", 
        category: "System", color: "#ef4444", createdAt: new Date()
    },
    {
        _id: "fb-sys-5", question: "CI/CD (Sürekli Entegrasyon/Dağıtım)", 
        description: "Kodu pushladığınızda otomatik olarak testlerin çalışması (CI) ve başarılı olursa canlı sunucuya kesintisiz olarak yüklenmesi (CD) sürecidir. GitLab CI, Github Actions yaygındır.", 
        category: "System", color: "#ef4444", createdAt: new Date()
    },
    {
        _id: "fb-sys-6", question: "Blue-Green Deployment", 
        description: "Mevcut sürüm (Blue) çalışırken, yeni sürüm (Green) tamamen farklı bir ortama kurulur. Testler bitince Load Balancer trafiği tek tıkla Green ortama yönlendirir, kesinti sıfırlanır.", 
        category: "System", color: "#ef4444", createdAt: new Date()
    },
    {
        _id: "fb-sys-7", question: "API Gateway Kullanımı", 
        description: "İstemciler ile backend mikroservisleri arasında duran tek giriş noktasıdır. İstek yönlendirme, rate limiting, token doğrulama gibi işlemleri merkezileştirir.", 
        category: "System", color: "#ef4444", createdAt: new Date()
    },
    {
        _id: "fb-sys-8", question: "Rate Limiting Nedir?", 
        description: "Bir IP adresinin veya kullanıcının API'a belirli bir zaman diliminde yapabileceği maksimum istek sayısını sınırlandıran güvenlik mekanizmasıdır (DDoS saldırılarını engeller).", 
        category: "System", color: "#ef4444", createdAt: new Date()
    },
    {
        _id: "fb-sys-9", question: "Saga Pattern", 
        description: "Mikroservis mimarisinde dağıtık transaction (işlem) yönetimini sağlar. Her servis kendi lokal transaction'ını işler, başarısız olursa önceki servisler için telafi (compensation) senaryoları çalışır.", 
        category: "System", color: "#ef4444", createdAt: new Date()
    },
    {
        _id: "fb-sys-10", question: "World Models (Yapay Zeka)", 
        description: "Sistemin sadece anlık veriyi işlemesi değil, çevresindeki dünyanın dinamiklerini öğrenerek gelecekteki olasılıkları simüle edip karar vermesi konseptidir.", 
        category: "System", color: "#ef4444", createdAt: new Date()
    }
];

module.exports = fallbackNotes;
