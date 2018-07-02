Coding Dojo > MEAN > MongoDB > Intro to MongoDB
answers commented out.


[x] Create a database called 'my_first_db'. <!-- use my_first_db -->
[x] Create students collection. <!-- db.createCollection("students") -->


[x] Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})<!-- { name, home_state, lucky_number, birthday {m, d, y} } -->
[x] Create 5 students with the appropriate info. <!-- db.students.insert({ name: "John Ahn", home_state: "California", lucky_number: 69, birthday: { month: 2, day: 8, year: 1987 } }) && "Denise Mercado", && "Nathan Wailes" && "Jordan Pridgen" && "Craig Dubois" -->
[x] Get all students. <!-- db.students.find().pretty() -->


[x] Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo). <!-- db.students.find({ $or: [ {home_state: "California"}, {home_state: "Washington"}] }) -->


[x] Get all students whose lucky number is:
[x] greater than 3 <!-- db.students.find({lucky_number: {$gt: 3}}).pretty() -->
[x] less than or equal to 10 <!-- db.students.find({lucky_number: {$lte: 10}}).pretty() -->
[x] between 1 and 9 (inclusive) <!-- db.students.find({$and: [{lucky_number: {$gte: 1}}, {lucky_number: {$lte: 10}}]}).pretty() -->


[x] Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation. <!-- db.students.update() -->

[x] Add some unique interests for each particular student into each of their interest arrays. <!-- db.students.update({name: "John Ahn"}, {$push: {interests: "backpacking"}}) && et al-->
[x] Add the interest 'taxes' into someone's interest array. <!-- db.students.update({name: "John Ahn"}, {$push: {interests: "taxes"}}) -->
[x] Remove the 'taxes' interest you just added. <!-- db.students.update({interests: "taxes"}, {$pull: {interests: "taxes"}}) -->


[x] Remove all students who are from California (or Washington). <!-- db.students.remove({$or: [{home_state: "California"}, {home_state: "Washington"}]}) -->

[x] Remove a student by name. <!-- db.students.remove({name: "Jordan Pridgen"}) -->

[x] Remove a student whose lucky number is greater than 5 (JUST ONE) <!-- db.students.remove({lucky_number: {$gt: 5}}, true) -->

[x] Add a field to each student collection called 'number_of_belts' and set it to 0. <!-- db.students.update({}, {$set: {number_of_belts: 0}}, {multi: true}) -->
[x] Increment this field by 1 for all students in Washington (Seattle Dojo). <!-- db.students.updateMany({home_state: "Washington"}, {$inc: {number_of_belts: 1}}) -->
[x] Rename the 'number_of_belts' field to 'belts_earned' <!-- db.students.updateMany({}, {$rename: {number_of_belts: "belts_earned"}}) -->
[x] Remove the 'lucky_number' field. <!-- db.students.updateMany({}, {$unset: {lucky_number:""}}) -->
[x] Add a 'updated_on' field, and set the value as the current date. <!-- db.students.updateMany({}, {$currentDate: {updated_on: true}}) -->