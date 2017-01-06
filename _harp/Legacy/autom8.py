from __future__ import print_function
in_contact = False
entries = 0
with open("data.txt", "r") as data:
    for line in data:
        if not in_contact:
            in_contact = True
            print("{")
        if entries == 0:
            print("'name': ", end = "")
        elif entries == 1:
            print("'position': ", end = "")
        elif entries == 2:
            print("'email': ", end = "")
        print("'" + line.strip() + "'", end = "")
        print("\n" if entries == 2 else ",\n")
        entries += 1
        if entries >= 3:
            entries = 0
            print("},")
            in_contact = False