function Stack() {
	this.count = 0;
	this.store = {};

	this.push = function (item) {
		this.store[this.count] = item;
		this.count++;
	};

	this.pop = function () {
		if (!this.count) return null;
		this.count--;
		delete this.store[this.count];
	};

	this.peek = function () {
        if (!this.count) return null;
        return this.store[this.count - 1]
    };
    
    this.size = function () {
        return this.count
    }
}


