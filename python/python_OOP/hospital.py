class Patient(object):
    PATIENT_ID = 0

    def __init__(self, name, allergies):
        self.patient_id = Patient.PATIENT_ID
        Patient.PATIENT_ID += 1
        self.name = name
        self.allergies = allergies
        self.bed_number = None



class Hospital(object):
    def __init__(self, name, capacity):
        self.patients_list = []
        self.name = name
        self.capacity = capacity
        self.beds = self.make_beds()

    def make_beds(self):
        beds = []
        for i in range(0, self.capacity):
            beds.append({
                'bed_id': i,
                'available': True
            })
        return beds

    def admit(self, patient):
        if len(self.patients_list) < self.capacity:
            self.patients_list.append(patient)
            for i in range(0, len(self.beds)):
                if self.beds[i]['available']:
                    patient.bed_number = self.beds[i]['bed_id']
                    self.beds[i]['available'] = False
                    break
            return 'Patient # {} admitted to bed # {}'.format(patient.patient_id, patient.bed_number)
        else:
            print 'Sorry, hombre, there are no available beds in the hospital.'
        return self

    def discharge(self, patient):
        if patient in self.patients_list:
            # remove patient from patients_list
            self.patients_list.remove(patient)
            # free up the bed
            for i in range(0, len(self.beds)):
                if self.beds[i]['bed_id'] == patient.bed_number:
                    self.beds[i]['available'] = True
            # set patient's bed_number to none
            patient.bed_number = None

        else:
            print 'No such patient here, dude'
        return self


# # tests
#
# jahn = Patient('John Ahn', 'none')
# denmer = Patient('Denise', 'shellfish')
# nathan = Patient('Nathan', 'peanuts')
#
# # test if jahn's bed_number == None
# print 'jahn'
# for i,j in jahn.__dict__.iteritems():
#     print '{}: {}'.format(i, j)
# print '='*50
#
# # create St. John's Hospital
# st_johns = Hospital("St. John's Hospital", 10)
#
# # check .admit()
# st_johns.admit(nathan)
# st_johns.admit(jahn)
# st_johns.admit(denmer)
#
# # print .patients_list to confirm admissions
# for x in st_johns.patients_list:
#     print st_johns.name
#     for i, j in x.__dict__.iteritems():
#         print '{}: {}'.format(i, j)
#     print '='*50
#
# # check .discharge()
# st_johns.discharge(jahn)
# print 'discharging jahn'
# print '='*50
#
# # print .patients_list to confirm discharge
# for x in st_johns.patients_list:
#     print st_johns.name
#     for i, j in x.__dict__.iteritems():
#         print '{}: {}'.format(i, j)
#     print '='*50
#
# # check that .discharge() reverted patient.bed_number
# print 'jahn'
# for i,j in jahn.__dict__.iteritems():
#     print '{}: {}'.format(i, j)
# print '='*50
#
# # check that proper beds are free
# for i in range(0, len(st_johns.beds)):
#     print st_johns.name, 'beds'
#     for j, k in st_johns.beds[i].iteritems():
#         print '{}: {}'.format(j, k)
#     print '='*50
#
#
# # check that each hospital gets its own beds (because all patients' id's are assigned consecutively
# regardless of hospital).
# phony_hospital = Hospital("Fake Hospital", 100)
#
# phony_hospital.admit(jahn)
#
# for x in st_johns.patients_list:
#     print st_johns.name
#     for i, j in x.__dict__.iteritems():
#         print '{}: {}'.format(i, j)
#     print '='*50
#
# for x in phony_hospital.patients_list:
#     print phony_hospital.name
#     for i, j in x.__dict__.iteritems():
#         print '{}: {}'.format(i, j)
#     print '='*50
