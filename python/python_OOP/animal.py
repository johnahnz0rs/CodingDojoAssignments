class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
    def walk(self):
        print 'walking (-5 health)...'
        self.health -= 5
        return self
    def run(self):
        print 'running (-10 health)...'
        self.health -= 10
        return self
    def display_health(self):
        print self.name, 'health:', self.health
        return self

# Create an instance of the Animal, have it walk() three times, run() twice, and finally displayHealth() to confirm that the health attribute has changed.
johnahnz0rs = Animal('johnahnz0rs')
# johnahnz0rs.walk().walk().walk().run().run().display_health()



class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150
    def pet(self):
        print 'petting (+5 health)...'
        self.health += 5
        return self

# Have the Dog walk() three times, run() twice, pet() once, and have it displayHealth().
heyBigBoy = Dog('HeyBigBoy')
# heyBigBoy.display_health()
# heyBigBoy.walk().run().display_health()



class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self):
        print 'flying (-10 health)...'
        self.health -= 10
        return self
    def display_health(self):
        super(Dragon, self).display_health()
        print 'I am a Dragon, mahfuqa!!!'
        return self

puff = Dragon('Puff')
# puff.walk().display_health()


# Now try creating a new Animal and confirm that it can not call the pet() and fly() methods, and its displayHealth() is not saying 'this is a dragon!'. Also confirm that your Dog class can not fly().
hedgehog = Animal('Sonic')
# hedgehog.pet()
# AttributeError: 'Animal' object has no attribute 'pet'

# hedgehog.fly()
# AttributeError: 'Animal' object has no attribute 'fly'

hedgehog.display_health()

# heyBigBoy.fly()
# AttributeError: 'Dog' object has no attribute 'fly'