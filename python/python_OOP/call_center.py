from datetime import datetime

class Call(object):
    CALL_ID = 0

    def __init__(self, caller_name, caller_phone_number, reason_for_call):
        self.unique_id = Call.CALL_ID
        Call.CALL_ID += 1
        self.caller_name = caller_name
        self.caller_phone_number = caller_phone_number
        self.time_of_call = datetime.now()
        self.reason_for_call = reason_for_call

    def display_info(self):
        for attr, val in self.__dict__.iteritems():
            if attr == 'time_of_call':
                print '{}: {}'.format(attr, val.strftime('%I:%M:%S'))
            else:
                print '{}: {}'.format(attr, val)
        return self



class CallCenter(object):
    def __init__(self):
        self.calls_list = []
        self.queue_size = len(self.calls_list)

    def add(self, *call_to_add):
        for item in call_to_add:
            self.calls_list.append(item)
        self.queue_size = len(self.calls_list)
        return self

    def remove(self):
        self.calls_list.remove(self.calls_list[0])
        self.queue_size = len(self.calls_list)
        return self

    def info(self):
        print 'Queue Length: {}'.format(self.queue_size)
        for i in range(0, self.queue_size):
            print '='*50
            print 'Call # {}'.format(i+1)
            print 'Caller Name: {}'.format(self.calls_list[i].caller_name)
            print 'Caller Phone Number: {}'.format(self.calls_list[i].caller_phone_number)
        print '='*50
        return self

