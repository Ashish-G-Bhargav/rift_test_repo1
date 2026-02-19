# src/processor.py

import json # <--- ERROR 1: IMPORT / LINTING (Unused import)

def calculate_total_score(scores) # <--- ERROR 2: SYNTAX (Missing colon)
    total = 0
    for score in scores:
        total += score
        
    # <--- ERROR 3: TYPE_ERROR (Cannot add integer and string)
    final_result = total + "50" 
    
    return final_result
