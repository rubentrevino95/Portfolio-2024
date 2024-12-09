class Human:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def talk(self):
        print('Hello')

    def leave(self):
        print('Goodbye')

    def get_name(self):
        return self.name
    
    def get_age(self):
        return self.age

    def set_age(self, age):
        self.age = age
    
human1 = Human('Jack', 43)

human2 = Human('Spike', 28)

human1.set_age(30)
print(human1.get_age)

human1.talk()

human2.get_name()

print(human2.get_name())

class Squad:
    def __init__(self, name, max_capacity):
        self.name = name
        self.max_capacity = max_capacity
        self.humans = []
    
    def add_member(self, human):
        if len(self.humans) < self.max_capacity:
            self.humans.append(human)
            return True
        return False
    
squad1 = Squad('Team USA', 4)

squad1.add_member(human1)
squad1.add_member(human2)

print(squad1.humans)