# This file 1 contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u= User.create(email: "crarojasca@unal.edu.co", password: "123456789")
u.save

u= User.create(email: "juasmartinezbel@unal.edu.co", password: "123456789")
u.save

u= User.create(email: "juasjuas1@memes.com", password: "123456789")
u.save

u= User.create(email: "juasjuas2@memes.com", password: "123456789")
u.save

u= User.create(email: "juasjuas3@memes.com", password: "123456789")
u.save


@user = User.find('1')
t= @user.build_turn(restaurant: "Ciencias Económicas", number: "1")
t.save

t= @user.build_turn(restaurant: "Ciencias Humanas", number: "1")
t.save

t= @user.build_turn(restaurant: "Hemeroteca", number: "1")
t.save

t= @user.build_turn(restaurant: "Matemáticas", number: "1")
t.save

t= @user.build_turn(restaurant: "Odontología", number: "1")
t.save

t= @user.build_turn(restaurant: "La Flecha", number: "1")
t.save

t= @user.build_turn(restaurant: "Central", number: "1")
t.save

t= @user.build_turn(restaurant: "Biología", number: "1")
t.save
