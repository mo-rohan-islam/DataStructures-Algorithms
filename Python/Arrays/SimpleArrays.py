strings = ['a', 'b', 'c', 'd']

print(strings[2])

# push
strings.append('e')

print(strings)

# pop
strings.pop()
strings.pop()

print(strings)

# insert at position
strings.insert(0, 'x')
print(strings)

strings.insert(2, 'alien')
print(strings)

# remove
strings.remove('b')
# strings.remove('e')
print(strings)