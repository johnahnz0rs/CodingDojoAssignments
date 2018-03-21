class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
            self.tax = 0.15
            self.display_all()
        else:
            self.tax = 0.12
            self.display_all()
    def display_all(self):
        print 'Price: $', self.price
        print 'Speed:', self.speed, 'mph'
        print 'Fuel:', self.fuel
        print 'Mileage:', self.mileage, 'mpg'
        print 'Tax:', self.tax * 100, '%'
        return self


car1 = Car(2000, 35, 'Full', 15)
print '='*50
car2 = Car(2000, 5, 'Not Full', 105)
print '='*50
car3 = Car(2000, 15, 'Kind of Full', 95)
print '='*50
car4 = Car(2000, 25, 'Full', 25)
print '='*50
car5 = Car(2000, 45, 'Empty', 25)
print '='*50
car6 = Car(20000000, 35, 'Empty', 15)