class Product(object):
    def __init__(self, price, item_name, weight, brand):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = 'for sale'
    def sell(self):
        self.status = 'sold'
        return self
    def add_tax(self, tax_as_decimal):
        return 'Price plus tax: $', format((self.price * tax_as_decimal), '.2f')
    def return_item(self, reason):
        self.reason = reason
        if self.reason.lower() == 'defective':
            self.status = 'defective'
            self.price = '0'
            return self
        elif self.reason.lower() == 'like new':
            self.status = 'for sale'
            return self
        elif self.reason.lower() == 'opened':
            self.status = 'used'
            self.price *= format((self.price * .8), '.2f')
            return self
    def display_info(self):
        print self.item_name
        print 'Brand:', self.brand
        print 'Price: $', self.price
        print 'Weight:', self.weight
        print '='*50
        return self