import matplotlib.pyplot as plt
import numpy as np

data = {'Maths':83, 'Physics':79, 'Chemistry':75, 'English':87, 'Social Science':82}
courses = list(data.keys())
values = list(data.values())

fig = plt.figure(figsize = (10, 5))

plt.bar(courses, values, width= 0.3)

plt.xlabel("Subjects")
plt.ylabel("Marks")
plt.title("Students enrolled in different courses")
plt.show()