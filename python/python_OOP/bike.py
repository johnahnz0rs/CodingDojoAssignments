class Bike(object):
    # What would you do to prevent the instance from having negative miles?
        # I made an if/else statement inside the reverse() method.
    # Which methods can return self in order to allow chaining methods?
        # I returned self on all the methods except __init__() cuz i'm a real g.
    def __init__(self, price, max_speed):
        self.price = 200
        self.max_speed = '25 mph'
        self.miles = 0
    def displayInfo(self):
        print 'price = $', self.price
        print 'max speed =', self.max_speed
        print 'mileage =', self.miles, 'miles'
        return self
    def ride(self):
        print 'Riding'
        self.miles += 10
        return self
    def reverse(self):
        print 'Reversing'
        if self.miles >= 5:
            self.miles -= 5
        else:
            self.miles = 0
        return self

# print 'blue_money'
# blue_money = Bike(200, '35 mph')
# blue_money.ride().ride().ride().reverse().displayInfo()
# print '='*50
#
# print 'big_booty_judy'
# big_booty_judy = Bike(50, '20 mph')
# big_booty_judy.ride().ride().reverse().reverse().displayInfo()
# print '='*50
#
# print 'unicycle'
# unicycle = Bike(180, '10 mph')
# unicycle.reverse().reverse().reverse().displayInfo()
# print '='*50

test_bike = Bike()
