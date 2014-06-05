#!/usr/bin/env python3

# -------------------------------
# projects/collatz/RunCollatz1.py
# Copyright (C) 2014
# Glenn P. Downing
# -------------------------------

"""
To run the program
    % coverage3 run --branch RunCollatz1.py < RunCollatz.in

To obtain coverage of the run:
    % coverage3 report -m

To document the program
    % pydoc -w Collatz1
"""

# -------
# imports
# -------

import sys

from Collatz1 import collatz_solve

# ----
# main
# ----

collatz_solve(sys.stdin, sys.stdout)

"""
% coverage3 run --branch RunCollatz1.py < RunCollatz.in > RunCollatz1.out



% coverage3 report -m
Name          Stmts   Miss Branch BrMiss  Cover   Missing
---------------------------------------------------------
Collatz1         18      0      6      0   100%
RunCollatz1       5      0      0      0   100%
---------------------------------------------------------
TOTAL            23      0      6      0   100%
"""
