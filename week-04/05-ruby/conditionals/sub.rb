puts "what is you suburb: "
suburb = gets.chomp
# if suburb == "rasht"
#     puts "You are living in the best place"
# elsif suburb == "Marylands"
#     puts  "You need to reconsider your location"
# elsif suburb == "Rosebay"
#     puts "it is good place to live in"
#     else
#         puts "i dont know this place"
# end

case suburb
when "rasht"
    puts "ajab jayii"
when "dahat"
    puts "bega rafti"
else
    puts "nemidona,,"     
end