#!/usr/bin/env python3

"""
CS373: Exercise #3
"""

""" ----------------------------------------------------------------------
Define the function my_zip() such it behaves as follows:
"""

def my_zip (a, b) :
    return list(map(lambda x, y : (x, y), a, b))

assert my_zip([2, 3, 4], [5, 6, 7]) == [(2, 5), (3, 6), (4, 7)]
