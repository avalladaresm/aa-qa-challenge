####Bugs (or hidden features?)

- Date input boxes
    - Month field (<strong>MM</strong>/DD/YYYY) can be 13 or higher, nevertheless, it still calculates the cost with the <strong>DD</strong> field. Even if, for example, the months are 13 (entry) and 14 (leaving).
    - If the leaving date is one day before the starting date and the times are the same, the calculator throws an error <i>ERROR! YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME</i>, which is correct. But, if the leaving time is greater, but less than 23:59, on that same day before the starting date, the cost shows as \$0 and "-1 Days, x Hours, y Minutes". Example: Entry: 12/23/2021 1:00 AM, Leaving: 12/22/2021 3:05 AM => $0 (-1 Days, 2 Hours, 5 Minutes).
    - The input boxes accept letters at the end, in between and at the beginning and even calculates when the button is clicked. Though, the calculation is very off.
<br>
- Time input boxes
  - The hour field can be 24 or higher, example: 26:00.
  - If a time is entered as 24-hour format, the input box accepts it and calculates with the entered value, even then the AM checkbox is checked.
  - If a time is entered as 24-hour format, and the PM checkbox is checked, and then the calculate button is clicked, the result is shown and the value in the time input is now the entered value + 12:00. Example: Entry: 12/23/2021 2:00 PM, Leaving: 12/25/2021 3:05 AM => \<Calculate\> => Value in Entry time input box is 14:00 AM.
  - The input boxes accept letters at the end, in between and at the beginning and even calculates when the button is clicked. Though, the calculation is very off. Example: Entry: 12/23/2021 1a:b0 AM, Leaving: 12/23/2021 12:00 AM => $341,748.00 (18985 Days, 23 Hours, 0 Minutes).