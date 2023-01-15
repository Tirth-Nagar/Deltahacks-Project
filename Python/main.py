from database import database
from  sensors import accelerometer
from sensors import scale
from sensors import circuit

# Determine the mass of 1 pill if the bottle is previously empty (i.e. no pills), the bottle is stationary, and the bottle cap is closed
mass_of_1_pill = 5 # grams (temp value)

# Update mass of pill in database
database.update_data("pill_mass", mass_of_1_pill)

# Determine the number of pills by dividing mass of all contents (measured after the bottle is stationary and the bottle cap is closed) using weight sensor by the mass of 1 pill
number_of_pills = 5 # temp value

# Update number of pills in database
database.update_data("num_pills", number_of_pills)