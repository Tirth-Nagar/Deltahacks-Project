from database import database
from  sensors import accelerometer
from sensors import scale

# Determine the mass of 1 pill
mass_of_1_pill = 5 # grams (temp value)

# Update mass of pill in database
database.update_data("pill_mass", mass_of_1_pill)

# Determine the number of pills by dividing mass of all contents using weight sensor by the mass of 1 pill
number_of_pills = 5 # temp value

# Update number of pills in database
database.update_data("num_pills", number_of_pills)