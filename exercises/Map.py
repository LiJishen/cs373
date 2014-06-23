#!/usr/bin/env python3

# ------
# Map.py
# ------

from math import sqrt

def my_map (uf, a) :
    return [uf(v) for v in a]

assert my_map(sqrt, [4, 9, 16]) == [2, 3, 4]
