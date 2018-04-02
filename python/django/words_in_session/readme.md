Requirements
Create a new app called 'session_words'.
Allow the user to add any new word to the session.  The user should be able to specify the color to display the word and whether the word should appear in bigger fonts.  The user should be able to clear the session as well.
Show the words stored in the session on the right.


form:
    1. add_new (action='/process'):
        a. text - add a word
        b. radio - choose color (red, green, blue)
        c. checkbox - show in BIG font
    2. clear_session (action='/clear_session'):
        
    
session (should be a list (or object?) of objects with following keys):
    1. datetime.now().strftime(%I:min:sec%p, Mon DayTH, yyyy)
    2. word
    3. color (rgb)
    4. font-size (small or large)

urls/routes:
    a. r'^', views.index
    b. r'^process', views.process
    c. r'^clear_session', views.clear_session


views/functions:
    1. index - render template
    2. process - appends object of POST data to session
        a. declare context = {} with session data inserted
        b. redirect ('/')
    3. clear_session
        a. clear session
        b. redirect('/')
    
    
templates
    1. index.html - displays form and submissions
        a. form 'add_new'
        b. form 'clear_session'