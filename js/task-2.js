// Mal deposunu yönetmek için nesneler oluşturacak bir Storage sınıfı oluşturun. Sınıf yalnızca bir argüman bekler - oluşturulan nesneye items özel özelliğinde yazılan ilk mal dizisi.

// Aşağıdaki sınıf yöntemlerini tanımlayın:

// getItems() - items özel özelliğindeki mevcut öğelerin bir dizisini döndürür.
// addItem(newItem) - yeni bir öğe newItem kabul eder ve nesnenin items özel özelliğindeki öğeler dizisine ekler.
// removeItem(itemToRemove) - itemToRemove öğesinin adını içeren bir dize alır ve nesnenin items özel özelliğindeki öğeler dizisinden kaldırır.
// Aşağıdaki kodu örnek başlatma ve yöntem çağrılarıyla birlikte alın ve çalışmanın doğruluğunu kontrol etmek için sınıf bildiriminden sonra yapıştırın. Konsol, çalışmalarının sonuçlarını gösterecektir. Lütfen orada herhangi bir değişiklik yapmayın.

class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(newItem) {
        this.items.push(newItem);
    }

    removeItem(itemToRemove) {
        this.items = this.items.filter(item => item !== itemToRemove);
    }
}




const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
